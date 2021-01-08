curl "http://fathomless-atoll-44992.herokuapp.com//sign-up"\

--include \
--request POST \
--header "Content-Type: applications/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD}"'"
  }
}'

echo
