curl "http://fathomless-atoll-44992.herokuapp.com/sign-out"\

--include \
--request DELETE \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: applications/json" \

echo
