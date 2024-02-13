package main

import (
	"changeme/backend/crypto"
	"changeme/backend/hash"
	"changeme/backend/jwt"
	"context"
	"github.com/labstack/gommon/log"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved,
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// returns a points to an interface input value
func ref[T any](v T) *T {
	return &v
}

func (a *App) CreateMd5Hash(input string) hash.HashResult {
	h, err := hash.CreateMd5Hash(input)
	if err != nil {
		log.Error(err)
		return hash.HashResult{Error: err.Error()}
	}
	return hash.HashResult{Hashed: h}
}

func (a *App) AesEncrypt(key string, message string) crypto.CryptoEncryptResult {
	h, err := crypto.AesEncrypt([]byte(key), message)
	if err != nil {
		log.Error(err)
		return crypto.CryptoEncryptResult{Error: err.Error()}
	}
	return crypto.CryptoEncryptResult{Cipher: h}
}

func (a *App) AesDecrypt(key string, message string) crypto.CryptoDecryptResult {
	h, err := crypto.AesDecrypt([]byte(key), message)
	if err != nil {
		log.Error(err)
		return crypto.CryptoDecryptResult{Error: err.Error()}
	}
	return crypto.CryptoDecryptResult{PlainText: h}
}

func (a *App) JwtEncode(key string, message string) jwt.JwtEncodedResult {
	h, err := jwt.Encode(message, key)
	if err != nil {
		log.Error(err)
		return jwt.JwtEncodedResult{Error: err.Error()}
	}
	return jwt.JwtEncodedResult{Encoded: h}
}

func (a *App) JwtDecode(message string) jwt.JwtDecodedResult {
	h, err := jwt.Decode(message)
	if err != nil {
		log.Error(err)
		return jwt.JwtDecodedResult{Error: err.Error()}
	}
	return jwt.JwtDecodedResult{Decoded: h}
}
