package domain

type JwtEncodedResult struct {
	Encoded string `json:"encoded,omitempty"`
	Error   string `json:"error,omitempty"`
}

type JwtDecodedResult struct {
	Decoded string `json:"decoded,omitempty"`
	Error   string `json:"error,omitempty"`
}

type HashResult struct {
	Hashed string `json:"hashed,omitempty"`
	Error  string `json:"error,omitempty"`
}

type CryptoEncryptResult struct {
	Cipher string `json:"cipher"`
	Error  string `json:"error"`
}

type CryptoDecryptResult struct {
	PlainText string `json:"plainText"`
	Error     string `json:"error"`
}
