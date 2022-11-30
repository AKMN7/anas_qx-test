# Qewam Fronted developer job Test project

## Description:

- We have a widget that shows in first section 7 days with dates and must to be always dynamic starting from today.
- The days that have a Startup sessions will be active and clickable as a design and disabled and not allowed to click.
- In the second section that is shown below, we will include startups that have sessions on the selected day.
- When no startup sessions available you can show there is no sessions for this day as the design.
- The start day to show is today, and the end day is 7 days after today.
- Will have arrows next and previous to show hidden days ( you can use slider or you can do it as a custom js)

## Acceptance Criteria:

- Verify using i18n for Arabic and English
- Verify using moment for times and dates.
- Verify creating and using a reusable components that you can pass a props for using it everywhere and can test it later.
- Verify writing a clean and a readable code.
- Verify when you press the Lang switcher to show the exact selected language for layout direction and content.
- Verify using css variables for colors from tailwind.css ( don’t use static code for colors)
- Since we’re using TailwindCss you can use Jit mode for specific sizes like text-[20px].
- Show the hover states for the mouse as a design.
- You can extend more sessions for JSON and show more conditions. [BONUS]
- You can change the session array data to fit your needs as dates and times. [BONUS]
- You have to create a join CTA button to send user to \_blank page with a zoom url.
- The second cancellation CTA will show a message in the console log or an alert that the session canceled and remove this session without refresh.

## Assets :

- You have to clone from GitHub this link and upload it to your account creating new repo and using commits and pull requests.
- Use Figma design to apply it for you work.
- You can use local folder to address the Arabic and English using

## Design

https://www.figma.com/file/P4WoRMOeI8xW4IUSO8rX74/QewamTest?node-id=0%3A1

```bash
# for Dynamic multi lang content using.
{{ $t(content) }}

```

- Using Vuex for global state management || Bonus.
- Creating another button for dark mode || Bonus.
- Using local storage to set language and dark mode || Bonus.
- You have English and Arabic fonts ready to use.
- Using Grid to expand widget || Bonus.
- Animations || Bonus.
- using external Lib for important uses is allowed but wisely.

# Final Step :

- Write your unit test for you functions cases using jest (in test folder ).
- Upload the project to your Github and and publish it to netlify.com.
- You can use Github action to run your test before build.[BONUS]
- You can use this settings for deploying in netlify.com

￼![](/static/settings.png)

Give us your app link and Github repo link :) ..

Note: You have one week period to achieve this Home Assignment.

# How we are going to test your project ?

- Quality Code.
- Bugs free.
- Fully functionality.
- Your speed work and time.
- Using components.
- Unit test.
- Commits for Git.
- Layout and design Acceptance criteria.
- Bonus addressed points.
