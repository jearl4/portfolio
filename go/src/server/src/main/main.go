package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	firebase "firebase.google.com/go"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"google.golang.org/api/option"
)

func main() {
	sa := option.WithCredentialsFile("C:/Users/JT/Desktop/Angular/Angular5/portfolio/portfolio-51dd4-firebase-adminsdk-57as6-28b4528ea5.json")
	app, err := firebase.NewApp(context.Background(), nil, sa)
	if err != nil {
		log.Fatalln(err)
	}

	client, err := app.Firestore(context.Background())
	if err != nil {
		log.Fatalln(err)
	}
	stock := getStock()
	log.Print(stock)

	// result, err := client.Collection("sampleData").Doc("stock").Set(context.Background(), map[string]interface{})
	_, _, err = client.Collection("stock").Add(context.Background(), map[string]interface{}{
		"blob": stock,
	})
	if err != nil {
		log.Fatalf("Failed adding alovelace: %v", err)
	}

	if err != nil {
		log.Fatalln(err)
	}
	log.Print("end call")

	defer client.Close()

	r := mux.NewRouter()

	// Solves Cross Origin Access Issue
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:4200"},
	})
	handler := c.Handler(r)

	srv := &http.Server{
		Handler: handler,
		Addr:    ":" + os.Getenv("PORT"),
	}

	log.Fatal(srv.ListenAndServe())
}

func getStock() Stock {
	var appl Stock
	response, err := http.Get("https://financialmodelingprep.com/api/financials/income-statement/AAPL")
	if err != nil {
		fmt.Printf("the request failed with error %s\n", err)
	} else {
		data, _ := ioutil.ReadAll(response.Body)
		// fmt.Println(string(data))
		err = json.Unmarshal(data, &appl)
		fmt.Println(appl.Revenue)
	}
	return appl
}

type Stock struct {
	Revenue string `json:"Revenue"`
}
