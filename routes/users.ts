import Router from "../common/router";
import App from "../app";

import {
    deductPoint
} from "../controllers/users-controller";
const router = Router(() => App);

router.route("/deductPoint").post(deductPoint);

export default router;
