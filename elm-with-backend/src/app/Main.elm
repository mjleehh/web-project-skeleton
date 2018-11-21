module App exposing (main)

import Browser
import Html exposing (text)

update action state = state

view state = text "hello elm"

main = Browser.sandbox {
        init = {},
        update = update,
        view = view
    }