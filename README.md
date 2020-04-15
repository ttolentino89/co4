# Covid-Corona Community Coalition (Co4)

<img width="1440" alt="Screen Shot 2020-04-05 at 5 07 10 PM" src="https://user-images.githubusercontent.com/27389714/78509971-f2f59280-775f-11ea-90a4-fc8ec7756b54.png">

In March 2020, the world and global economy in general experienced a pandemic unlike anything we've seen before. A highly-contagious new strain of coronavirus known as "COVID-19" has spread exponentially quickly and left many casualities in its wake, exacerbated by the fact literally no one is immune, and that this disease can be spread by asymptomatic people. Social distancing and self-imposed quarantine have become the new norm, and many workplaces and schools now require employees and students to log in remotely from home to prevent "captive" gatherings where the virus can infect members quickly. Professional sporting events, large entertainment productions, and major retailers, restaurants and bars have all shuttered their doors in an effort to slow the spread of the virus. As a result, business revenues and employee incomes have increased dramatically, and we are currently entering a new age of uncertainty over economic prosperity as the focus has shifted to personal health and safety as a much-needed priority. In other words, the wheel has stopped turning at its normal pace, and economists fear that it will eventually grind to a slow, halting stop if things don't recover soon. At the time of this writing, it is early April and things don't seem to be looking up just yet.

<img width="690" alt="Screen Shot 2020-04-05 at 5 25 26 PM" src="https://user-images.githubusercontent.com/27389714/78510339-8334d700-7762-11ea-914d-844bd905e95e.png">

Another unfortunate effect of this pandemic are essential supply shortages, often caused by anxiety-induced "panic buying". A notable example of this is the lack of N95 masks at hospitals, who desperately need this layer of protection and have resorted to makeshift or recycled "masks". With social distancing procedures in place, the most vulnerable members of our society such as the elderly, uninsured and low-income folks who may find themselves recently unemployed are often unable to procure basic needs for themselves such as food, medicine and household supplies. How can we solve such a common, community-based problem during these times?

The Covid-Corona Community Coalition (also knownCo4) is a hyper-local, web-based fullstack application where community members can find, request and share resources (primarily essential goods and supplies) with their neighbors and local civic authorities/non-profit organizations. We are living in a time of great need where our greatest resource is each other, and should the economy totally collapse, we will need to find new ways to keep the fabric of society together...even if we're still 6 feet or more apart.

# The Game Plan:

Planned React components (in no particular order):
- Header/Nav Bar
- Welcome Page/Login
- New User Registration
- Main/Home (this will act as the container)
- View all items
- Create, edit, delete item (by ID)
- Footer

Schemas (currently written in SQL, will migrate to Postgres/Rails during development):

<img width="443" alt="Screen Shot 2020-04-15 at 9 26 07 AM" src="https://user-images.githubusercontent.com/27389714/79342782-8d419d00-7efb-11ea-87f6-849c8c7a4691.png">

Current prelimary ERD (powered by sqlDBM):

<img width="501" alt="Screen Shot 2020-04-15 at 9 46 37 AM" src="https://user-images.githubusercontent.com/27389714/79345637-5d949400-7eff-11ea-9eb7-d8ebd114af21.png">

Wirefames:

Layouts for desktop, tablet and mobile views can be seen in the co4_wireframes.pdf uploaded to this repo. You can also view wireframes online at this link [here.](https://github.com/ttolentino89/covid-corona-community-coalition/blob/master/co4_wireframes.pdf)

# Imported Dependencies + Code Snippet:

The third-party components I added to this project are mostly for styling + decorative elements rather than anything else, notably
- Bulma
- React Popup
- SASS
- PropTypes

I was actually really happy with how things worked out using React Popup, since I was having a bit of an issue creating a custom "Success!" message/alert type modal that lets the user know that their item was successfully created (otherwise the user literally has no way of know their submit went through.) React Popup was able to solve this issue in 3 lines of code and minimal CSS styling after attempting to do this on my own for a whole weekend and failing.  For that reason, I'm choosing React Popup as my code snippet and highly recommend it to anyone else building projects with React!

<img width="452" alt="Screen Shot 2020-04-15 at 9 48 17 AM" src="https://user-images.githubusercontent.com/27389714/79345678-6b4a1980-7eff-11ea-88a2-1c273404cc04.png">
<img width="788" alt="Screen Shot 2020-04-15 at 9 49 26 AM" src="https://user-images.githubusercontent.com/27389714/79345715-769d4500-7eff-11ea-9ecb-d0eda1a9afa8.png">


# Post-MVP Goals:

![CH-blog-3 10 20-2](https://user-images.githubusercontent.com/27389714/78515020-411b8d80-7782-11ea-9f2c-3cfb04807eb4.png)

- Different type of user accounts with different priviliges (i.e. non-profit volunteer orgs, civic/gov, enterprise corps, free-tier community members, etc.) For example: a vetted, non-profit volunteer organization whose work primarily focuses on distributing supplies to the most vulnerable members of society will have a higher precendence for items over an enterprise or community-level user) Any "premium" membership fee for this type of org will also be waived.
- Social distancing-friendly drop-off zones, powered by Google Maps API. It's increasingly difficult to trade goods during a time when little-to-no human contact is advised, so I'd like to come up with a way to make this easier for all parties involved.
- Links to Helpful Resources, maybe even a blog/RSS feed that publishes articles with useful information and encouraging support during these troubled times.
- Implementing the [NovelCOVID API](https://github.com/ttolentino89/API) for up-to-date information and stats on the pandemic.


![COVID Illustration 2-01_1](https://user-images.githubusercontent.com/27389714/78510193-8ed3ce00-7761-11ea-9100-146479301429.png)


I sincerely hope that Co4 doesn't have to become a reality, and that things begin to recover soon. However, aside from the name being event-specific (and easily changeable), the concept of a hyper-local, password-protected trade & barter-based  resource sharing application could certainly be applicable during other natural disasters and catastrophic situations. Anything that helps the right people to get the supplies they need more quickly and efficiently is a positive thing. For that reason, I'm leaving this project open source and encourage others to participate!

