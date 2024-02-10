package hash

type HashResult struct {
	Hashed *string `json:"hashed,omitempty"`
	Error  *string `json:"error,omitempty"`
}
