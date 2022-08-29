# team bi0s Website

The 2022 website for team bi0s, made on NextJS React.

## Setting Up Locally

1. Install [Node.js](https://nodejs.org/en/download/)
2. Clone the repository
3. Run `yarn install` to install all dependencies
4. Run `yarn run dev` to start the development server

Using [WebStorm](https://www.jetbrains.com/webstorm/) is recommended for development.

## Updating Content

Profiles of people featured on the `/teams` page are stored inside the `/src/data` folder, in the following files in 
JSON like format -
1. `advisors.ts` - Advisors
2. `alumni.ts` - Alumni
3. `students.ts` - Students
4. `staff.ts` - Staff

Simply modify these files following the existing format to update the content.

Achievements too are stored in the `/src/data/achievements.ts` file, in JSON like format.

For modifying rest of the content on the site, you will have to modify files inside the folder named after corresponding
page in the `/src` folder. For example, to modify the content on the `/about` page, you will have to modify the files 
inside the `/src/about` folder.

## Deploying

1. Run `yarn run build` to build the project
2. Run `yarn run start` to start the production server

Use [Amazon Amplify](https://aws.amazon.com) or [Vercel](https://vercel.com) to deploy the project.

## Contributors

Designed & Developed with ❤️ by [Ashwin Shenoy](https://github.com/aswinshenoy) via 
[Traboda](https://github.com/traboda) for team bi0s.

Traboda ❤️ bi0s.
