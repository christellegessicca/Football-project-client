curl "http://fathomless-atoll-44992.herokuapp.com/change-password"\

--include \
--request PATCH \
--header "Authorization: Bearer: ${TOKEN}" \
--header "Content-Type: applications/json" \
--data '{
  "passwords": {
    "old": "'"${OLDPW}"'",
    "new": "'"${NEWPW}"'"
  }
}'

echo
