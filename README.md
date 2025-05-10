# Grammy.js Vercel Template

This is a template for deploying a [Grammy.js](https://grammy.dev/) bot on [Vercel](https://vercel.com/).

## Features

- **Webhook Support**: Automatically sets up a webhook for your bot.
- **Local Development**: Run your bot locally in development mode.
- **Environment Variables**: Easily configure your bot using `.env` files.

## Project Structure

```
.env                # Environment variables (not committed to Git)
.example.env        # Example environment variables
.gitignore          # Files and folders to ignore in Git
package.json        # Project dependencies and scripts
tsconfig.json       # TypeScript configuration
vercel.json         # Vercel deployment configuration
api/
  webhook.ts        # Webhook handler for Vercel
scripts/
  build.ts          # Script to set up the webhook
src/
  index.ts          # Main bot logic
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/grammyjs-vercel-template.git
cd grammyjs-vercel-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your bot token and other configurations. Use `.example.env` as reference:

```env
BOT_TOKEN=your-bot-token
WEBHOOK=your-webhook-url
MODE=development
```

### 4. Run Locally

To run the bot locally in development mode:

```bash
npm run dev
```

### 5. Deploy to Vercel

1. Install the [Vercel CLI](https://vercel.com/docs/cli) if you haven't already:

   ```bash
   npm install -g vercel
   ```

2. Deploy the project:

   ```bash
   vercel
   ```

3. Set up your environment variables on Vercel:

   ```bash
   vercel env add
   ```

4. Update the `MODE` environment variable to `production` for deployment:

   ```bash
   vercel env add MODE production
   ```

5. Build the project to set up the webhook:

   ```bash
   npm run build
   ```

6. Set the webhook for your Telegram bot by visiting:

   ```text
   https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://<DOMAIN>.vercel.app/api/webhook
   ```

## License

This project is licensed under the ISC License.
