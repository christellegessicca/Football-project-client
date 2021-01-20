curl "http://fathomless-atoll-44992.herokuapp.com/sign-in" \

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
