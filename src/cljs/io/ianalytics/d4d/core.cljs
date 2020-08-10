(ns io.ianalytics.d4d.core
  (:require ["react" :as react]
            ["react-dom" :as react-dom]

            ["/defaultState.js" :default defaultState]
            ["/StateProvider.js" :default StateProvider :as sp]
            ["/Component.js" :default Example]))


(defn init! []
  (.log js/console Example)
  (.log js/console StateProvider)
  (react-dom/render

   ;; React element
   (Example
    (react/createElement
     react/Fragment
     nil
     (react/createElement "p" nil "Hello")
     (react/createElement "p" nil "Wolrd")))
   #_(StateProvider
      #js {"count"   0
           "reducer" nil}
      #_(Example 6))

   ;; DOM mounting point
   (js/document.querySelector "#root")))


(defn reload! []
  (init!))
