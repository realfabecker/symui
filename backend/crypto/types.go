package crypto

type CryptoEncryptResult struct {
	Cipher string `json:"cipher"`
	Error  string `json:"error"`
}

type CryptoDecryptResult struct {
	PlainText string `json:"plainText"`
	Error     string `json:"error"`
}
