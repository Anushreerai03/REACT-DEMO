"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_controller_1 = require("../controllers/service.controller");
const social_feed_controller_1 = require("../controllers/social-feed.controller");
const testimonial_controller_1 = require("../controllers/testimonial.controller");
const project_controller_1 = require("../controllers/project.controller");
const auth_middleware_1 = __importDefault(require("./auth.middleware"));
const contact_us_controller_1 = require("../controllers/contact-us.controller");
// import {upload} from './mutler';
const router = (0, express_1.Router)();
router.get('/services', service_controller_1.getServices);
// router.post('/services', upload, createService); 
router.post('/services', service_controller_1.createService);
router.get('/services/:id', service_controller_1.getServiceById);
router.put('/services/:id', service_controller_1.updateService);
router.delete('/services/:id', service_controller_1.deleteService);
router.get('/social-feed', social_feed_controller_1.getSocialfeed);
router.post('/social-feed', social_feed_controller_1.createSocialfeed);
router.put('/social-feed/:id', social_feed_controller_1.updateSocialfeed);
router.delete('/social-feed/:id', social_feed_controller_1.deleteSocialfeed);
router.get('/project', project_controller_1.getProject);
router.get('/project/:id', project_controller_1.getProjectById);
router.post('/project', auth_middleware_1.default, project_controller_1.createProject);
router.put('/project/:id', auth_middleware_1.default, project_controller_1.updateProject);
router.delete('/project/:id', project_controller_1.deleteProject);
router.get('/testimonial', testimonial_controller_1.getTestimonial);
router.post('/testimonial', testimonial_controller_1.createTestimonial);
router.put('/testimonial/:id', testimonial_controller_1.updateTestimonial);
router.delete('/testimonial/:id', testimonial_controller_1.deleteTestimonial);
router.post('/contact', contact_us_controller_1.createContact);
exports.default = router;