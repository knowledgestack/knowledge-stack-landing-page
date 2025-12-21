# Deployment Guide for DigitalOcean Apps

## Issue
The build is failing because the build command is set to `npm run build` in the DigitalOcean Apps UI, but the environment uses Bun which doesn't have npm.

## Solution

You need to update the build command in your DigitalOcean Apps Platform settings:

### Option 1: Update via DigitalOcean UI (Recommended)

1. Go to your DigitalOcean Apps Platform dashboard
2. Select your application
3. Go to **Settings** → **App Spec** or **Components**
4. Find the **Build Command** field
5. Change it from `npm run build` to `bun run build`
6. Save and redeploy

### Option 2: Use App Spec File

The `.do/app.yaml` file in this repository should automatically configure the build command. However, if you have a custom build command set in the UI, it may override the file.

To use the App Spec file:
1. In DigitalOcean Apps Platform, go to **Settings**
2. Make sure **App Spec** is set to use the file from the repository (`.do/app.yaml`)
3. Or manually update the App Spec to include:
   ```yaml
   static_sites:
     - name: web
       build_command: bun run build
       output_dir: dist
   ```

## Files Updated

- ✅ `package.json` - Added `packageManager` field to specify Bun
- ✅ `.do/app.yaml` - Added App Spec with correct build command
- ✅ `package.json` - Updated start command to use `bunx` instead of `npx`

## Verification

After updating the build command, the deployment should:
1. Install dependencies with `bun install`
2. Run `bun run build` instead of `npm run build`
3. Successfully build the application

