import { Router } from "express"

import { newsletter } from "../controllers/newsletter.controller.js"


const router = Router()


router.route("/newsletter").post(newsletter)


export default router