# Local Development Guide

## Local Supabase setup

To use a local supabase dev instance you will needs docker installed 

1. Install supabase CLI

```sh
brew install supabase/tap/supabase # macOS & Linux
# or
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git # windows
scoop install supabase # windows
```

2. Start supabase

```sh
supabase start
```

3. Make local environment file

```sh
touch .env.local
echo "SUPABASE_SERVICE_ROLE_KEY=Key from output of step 3" >> .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=Key from output of step 3" >> .env.local
```

4. Run the project, you're all done