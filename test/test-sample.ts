import * as Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import {assert} from "chai"


Enzyme.configure({adapter: new Adapter()})

describe("test", () => {
    it("is sample test.", () => {
        assert.isTrue(true)
    })
})
