import * as gameServices from "./gameServices"
import request from "supertest"
import app from "../app"
import lodash from "lodash"

describe("Game service", () => {
  test("should init a deck", () => {

    const deck = gameServices.initDeck()

    let numberOfDiamond = deck.filter((card) => card === "diamond").length
    expect(numberOfDiamond).toBe(6)

    let numberOfGold = deck.filter((card) => card === "gold").length
    expect(numberOfGold).toBe(6)

    let numberOfSilver = deck.filter((card) => card === "silver").length
    expect(numberOfSilver).toBe(6)

    let numberOfCloth = deck.filter((card) => card === "cloth").length
    expect(numberOfCloth).toBe(8)

    let numberOfSpice = deck.filter((card) => card === "spice").length
    expect(numberOfSpice).toBe(8)

    let numberOfLeather = deck.filter((card) => card === "leather").length
    expect(numberOfLeather).toBe(10)

    let numberOfCamel = deck.filter((card) => card === "camel").length
    expect(numberOfCamel).toBe(8)

    expect(deck.length).toBe(52)
  })

  test("should draw cards", () => {
    const deck = gameServices.initDeck()
    const drawnCards = gameServices.drawCards(deck, 20)
    expect(deck.length).toBeGreaterThan(0)
    expect(drawnCards.length).toBe(20)
  })

  test("should put camels from hand to herd", () => {
    /*
    const game = {
        _players: [
            { hand: ["camel" , "gold"], camelsCount: 0 },
            { hand: ["gold", "gold"], camelsCount: 0 }, 
        ],
    }
        gameServices.putCamelsFromHandToHerd(game)
        expect(game._players[0].hand.length).toBe(1)
        expect(game._players[0].hand).toStrictEqual(["gold"])
        expect(game._players[0].camelsCount).toBe(1)
        expect(game._players[1].hand.length).toBe(2)
        expect(game._players[1].hand).toStrictEqual(["gold", "gold"])
        expect(game._players[1].camelsCount).toBe(0)
    */
        const game = {
          _players: [
              { hand: ["camel" , "camel"], camelsCount: 0 },
              { hand: ["camel", "gold"], camelsCount: 0 }, 
          ],
      }
          gameServices.putCamelsFromHandToHerd(game)
          expect(game._players[0].hand.length).toBe(0)
          expect(game._players[0].hand).toStrictEqual([])
          expect(game._players[0].camelsCount).toBe(2)
          expect(game._players[1].hand.length).toBe(1)
          expect(game._players[1].hand).toStrictEqual(["gold"])
          expect(game._players[1].camelsCount).toBe(1)
  })
})

// Prevent database service to write tests game to filesystem
jest.mock("fs")

// TODO: Mock lodash shuffle

describe("Game router", () => {
  test("should create a game", async () => {
    const response = await request(app).post("/games").send({ name: "test" })
    // TODO
  })
})