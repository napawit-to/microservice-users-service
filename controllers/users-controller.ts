import { ControllerDelegate } from "../common/middlewares/controller";
import App from "../app";
import { stringify } from "querystring";

export let deductPoint: ControllerDelegate<{
    customer_id:string
}, {
}> = {
    expectations: {
        body: {
            customer_id: {
                type: "string",
                required: true
            }
        }
    },
    perform: async(request) => {
        let user = await App.database.redeem(request.body.customer_id);
        if (!user) {
            throw new Error("E00000002");
        }
        return {
            status: 200
        };
    }
};
