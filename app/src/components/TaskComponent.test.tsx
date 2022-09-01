import {render} from "@testing-library/react";
import {TaskComponent} from "./TaskComponent";

describe('Task', () => {
    it("snapshot", () => {
        const task = {
            id: 1,
            title: "Test Task",
            description: "Test Description",
            completed: false
        }
        // TODO use responseModel instead of task
        const tree = render(<TaskComponent task={task} />)
        expect(tree).toMatchSnapshot()
    })
})
