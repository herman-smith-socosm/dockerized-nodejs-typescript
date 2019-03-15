To run:
-------
npm run build-ts only compiles the application
npm run serve (npm run start) only starts the application

To develop:
-----------
npm run watch-ts

and in a separate terminal we run:
npm run watch-node

To kubctl exec -it pod /bin/sh for specific pod
-----------------------------------------------
kubectl get all
kubectl exec -it the-pod-name -c the-container-name /bin/sh

PORT FORWARD
------------
kubectl port-forward simple-nodejs-5c6d5d944b-4zj4m 3010:3010
kubectl port-forward simple-nodejs-5c6d5d944b-4zj4m 3011:3011