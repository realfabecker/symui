package gpg

import (
	"bytes"
	"errors"
	"github.com/realfabecker/symui/backend/core/domain"
	"os/exec"
	"strconv"
	"strings"
)

func ListKeys() ([]domain.GpgKey, error) {
	lraw, err := listKeysRaw()
	if err != nil {
		return nil, err
	}
	var lkeys []domain.GpgKey
	for _, v := range lraw {
		var key domain.GpgKey
		for _, l := range v {
			if strings.HasPrefix(l, "pub:") {
				pub, err := newGpgKeyPub(l)
				if err != nil {
					return nil, err
				}
				key.Pub = *pub
			} else if strings.HasPrefix(l, "uid:") {
				uid, err := newGpgKeyUid(l)
				if err != nil {
					return nil, err
				}
				key.Uid = *uid
			}
		}
		lkeys = append(lkeys, key)
	}
	return lkeys, nil
}

func listKeysRaw() ([][]string, error) {
	cmda := exec.Command("gpg", "--list-keys", "--keyid-format=long", "--with-colons")
	var outb, errb bytes.Buffer

	cmda.Stdout = &outb
	cmda.Stderr = &errb
	if err := cmda.Run(); err != nil {
		return nil, err
	}

	lkeys := make([][]string, 0)
	lindex := 0
	for _, v := range strings.Split(strings.TrimSpace(outb.String()), "\n") {
		if strings.HasPrefix(v, "tru:") {
			continue
		}
		if strings.HasPrefix(v, "pub:") {
			if len(lkeys) > 0 {
				lindex = lindex + 1
			}
		}
		if len(lkeys) == 0 || lindex >= len(lkeys) {
			lkeys = append(lkeys, []string{v})
		} else {
			lkeys[lindex] = append(lkeys[lindex], v)
		}
	}
	return lkeys, nil
}

func newGpgKeyPub(pub string) (*domain.GpgKeyPub, error) {
	lkey := strings.Split(pub, ":")
	if len(lkey) < 6 {
		return nil, errors.New("unable to obtain pub meta from key")
	}
	length, err := strconv.Atoi(lkey[2])
	if err != nil {
		return nil, err
	}
	algo, err := strconv.Atoi(lkey[3])
	if err != nil {
		return nil, err
	}
	date, err := strconv.Atoi(lkey[5])
	if err != nil {
		return nil, err
	}
	expires, err := strconv.Atoi(lkey[6])
	if err != nil {
		return nil, err
	}
	return &domain.GpgKeyPub{
		Type:    lkey[1],
		Length:  int32(length),
		Algo:    int8(algo),
		Keyid:   lkey[4],
		Date:    int32(date),
		Expires: int32(expires),
	}, nil
}

func newGpgKeyUid(uid string) (*domain.GpgKeyUid, error) {
	lkey := strings.Split(uid, ":")
	if len(lkey) < 9 {
		return nil, errors.New("unable to obtain uid meta from key")
	}
	return &domain.GpgKeyUid{Uid: lkey[9]}, nil
}
