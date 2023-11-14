# API modules

The `src/api` folder contains different modules that can be used to interact with our
server's APIs, Supabase APIs, etc.

## Documentation

Below is a list of the different API modules and a brief overview of what they do.
For more information, see the comments in the respective module's file.

**⚠️ Note:** this list may be unfinished.

### Address API

Exports constants containing different URLs for our server's APIs.
These URLs have defaults but can be configured via environment variables.

### Auth API

Exports functions that can be used to interact with the Supabase auth API.

### Chat API

Exports a `useGymBotAI` hook that can be used to interact with the GymBot AI chat.

### Debug logs API

Exports information about wether debug logs are enabled or not for certain modules.
