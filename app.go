package main

import (
	"changeme/backend/hash"
	"context"
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

func (a *App) CreateMd5Hash(input string) *hash.HashResult {
	h, err := hash.CreateMd5Hash(input)
	if err != nil {
		return &hash.HashResult{Error: ref(err.Error())}
	}
	return &hash.HashResult{Hashed: &h}
}
