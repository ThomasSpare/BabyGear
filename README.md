# Code Coach
### Learn to Code

#### Advanced Frontend portolio project 5

by Thomas Spåre

---
## CodeCoach Summary

Backend: https://codecoach-a2f14f649917.herokuapp.com/

Front-end site: https://codecoach-frontend-2102ce726626.herokuapp.com/

Github repo: 

- Backend  https://github.com/ThomasSpare/CodeCoach
- Front-end  https://github.com/ThomasSpare/CodeCoach-Frontend 

## Troubleshooting the API connection

I had from the start trouble to connect to and register new users. This issue took me a long time to figure out.
Either something was wrong in the frontend application. Or it was a CORS issue. Or it was the API.
I had CORS issues at the start but managed to sort that out. After looking through the frontend registerpage and sending
register requests to the API I could see the logs in the API browser and they always returned a 500 error. 
I had also checked that I had the same fields in my frontend as was on my backend. 

So in the end it boilded down to check if the the API was working correctly.
The solution came after I used postman to troubleshoot the API directly by sending JSON requests to the API url.
I could figure out what was wrong in minutes after seeing exactly where the errors appeared in the API.
