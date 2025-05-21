package main

import (
	"fmt"
	"net/http"

	"github.com/a-h/templ"
)

func main() {
	component := hello("bogota")

	http.Handle("/", templ.Handler(component))
	fmt.Println("'/projects' Server started")
	http.ListenAndServe(":3000", nil)
}
