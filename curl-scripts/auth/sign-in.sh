curl "https://libary-express-api-devlopment.herokuapp.com/sign-in"\

--include \
--request POST \
--header "Content-Type: applications/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'

echo
