(ns zenlive.routes
  (:require [compojure.core :refer :all]
            [zenlive.layout :as page]
            [zenlive.pages.ctrl :as pages]
            [noir.response :as resp]
            ))

(defroutes home
  (GET "/" req
       (pages/homepage))
  (GET "/sign-in" req
       (pages/signinpage))
  (GET "/sign-up" req
       (pages/signuppage))
  (GET "/cp" req
       (pages/cppage))
  (POST "/cp" req
        (pages/addquote (:params req)))
;;  (POST "/sign-up" req
;;        (do (signup/addacc (:params req))
;;          (resp/redirect "/")))
  )
