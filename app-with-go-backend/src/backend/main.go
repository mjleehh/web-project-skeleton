package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func main() {
	app := gin.Default()
	if err := app.Run(":3000"); err != nil {
		fmt.Println("failed to start backend")
	}
}