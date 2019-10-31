port module App exposing (main)

import Browser
import Html exposing (text, div, button)
import Html.Events exposing (onClick)

port toJs : () ->  Cmd msg
port toElm : (Float -> msg) -> Sub msg

type Action = RequestRandom | ReceiveRandom Float

type alias Flags = {}

type alias State = {
        random: Float
    }

init : Flags -> (State, Cmd Action)
init _ = ({random = 0}, toJs ())

update : Action -> State -> (State, Cmd Action)
update action state = case action of
    RequestRandom -> (state, toJs ())
    ReceiveRandom num -> ({state | random = num}, Cmd.none)

subscriptions : State -> Sub Action
subscriptions _ = toElm ReceiveRandom

view state = div[][
        div[][text <| String.fromFloat state.random],
        div[][button [onClick RequestRandom][text "new random"]]
    ]

main = Browser.element {
        init = init,
        update = update,
        view = view,
        subscriptions = subscriptions
    }