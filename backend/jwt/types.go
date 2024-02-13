package jwt

type JwtEncodedResult struct {
	Encoded string `json:"encoded,omitempty"`
	Error   string `json:"error,omitempty"`
}

type JwtDecodedResult struct {
	Decoded string `json:"decoded,omitempty"`
	Error   string `json:"error,omitempty"`
}
