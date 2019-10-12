import Router from "../common/router";

import loyalty from "./users";

const router = Router();

router.use("/v1", loyalty);

export default router;
