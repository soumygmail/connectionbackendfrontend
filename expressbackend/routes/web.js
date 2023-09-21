import express from 'express'
import StudentController from '../controllers/StudentControllers.js'

const router = express.Router()

router.get('/student', StudentController.getAllDoc)

export default router