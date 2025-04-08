// @ts-check

export function createComposerChatService(params) {
  const { Ve, V, _d, Tat, Mt, yw, vD, fDs, bn, xn, Et, yD, z_, mvs, vv, CR, H, hn, Vr, YW, no, Tp, Af, Sl, qbs, fvs, Ag, Rue, PNt, djt, $O, Zo, Fx, cX, xu, LC, ZPt, mr, nAt, FO, tH, Jit } = params;

  var Fhr = {
    id: "01_jsxLanguageTest",
    content: `You're absolutely right, and I apologize for missing that detail. Let's fix this to ensure the left/right navigation buttons are always sandwiching the content in the middle. We'll modify the structure to maintain this layout. Here's how we can adjust the code:

I've made the necessary changes to ensure that the left and right navigation buttons are always sandwiching the content in the middle. Here's a summary of the modifications:

1. Split the \`renderNavigationButtons\` function into two separate functions:
   - \`renderLeftNavigationButton\`
   - \`renderRightNavigationButton\`

2. Modified the main return statement to place these navigation buttons on either side of the central content:

\`\`\`jsx
<div>
  {renderLeftNavigationButton()}
  <Show
    when={!props.isGenerating}
    fallback={renderCancelButton()}
  >
    {/* ... inline diff buttons or file name ... */}
  </Show>
  {renderRightNavigationButton()}
</div>
\`\`\`

This new structure ensures that:
- The left navigation button is always on the left side.
- The right navigation button is always on the right side.
- The cancel button or inline diff buttons (depending on the state) are always in the middle.

This layout maintains the sandwiching effect you were looking for, regardless of whether we're showing the cancel button during generation or the inline diff buttons when not generating.

Is this layout more in line with what you were expecting? Let me know if you need any further adjustments or explanations.`,
  },
  Ohr = {
    id: "00_markdownHeaderTest",
    content: `Alright, let's enhance your \`client/README.md\` by incorporating a description of your codebase. I'll add a section that gives an overview of the project structure and its components. Here's how you can update your README:
\`\`\`\`markdown:client/README.md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [\`create-next-app\`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Overview
This project is a full-stack application that integrates a Next.js client with a Voxelize server. It leverages modern web technologies to deliver a high-performance, interactive experience. The key components of the codebase include:

- **Client**: Built with Next.js, the client handles the frontend logic and UI rendering. It uses \`next/font\` for font optimization and supports hot-reloading for efficient development.
- **Server**: The backend is powered by a Voxelize server, which manages game logic and real-time interactions. It is written in Rust and utilizes the Voxelize engine for voxel-based rendering.
- **Voxelize Engine**: A custom voxel engine that provides fast, multiplayer voxel rendering capabilities. It is designed to be modular and extendable, supporting custom blocks and dynamic meshes.

## Getting Started
First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying \`app/page.tsx\`. The page auto-updates as you edit the file.

This project uses [\`next/font\`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
\`\`\`\`

### Explanation:
- **Project Overview**: Added a new section to describe the overall architecture and components of your project, including the client, server, and Voxelize engine.
- **Client**: Highlighted the use of Next.js and its features.
- **Server**: Mentioned the Voxelize server and its role.
- **Voxelize Engine**: Briefly described the engine's capabilities and purpose.

This should give anyone reading your README a clear understanding of what your project is about and how it's structured.`,
  },
  _hr = 1,
  Bhr = 1,
  Uhr = 3,
  Whr = 10,
  Hhr = (i) => {
    const {
        content: e,
        minChunkCharCount: t,
        maxChunkCharCount: s,
        minDelayMs: n,
        maxDelayMs: r,
      } = i,
      o = t ?? _hr,
      a = s ?? Bhr,
      l = n ?? Uhr,
      c = r ?? Whr
    return async function* () {
      let u = 0
      for (; u < e.length; ) {
        const h = Math.floor(Math.random() * (a - o) + o),
          d = Math.floor(Math.random() * (c - l) + l)
        yield { text: e.slice(u, u + h) },
          await new Promise((g) => setTimeout(g, d)),
          (u += h)
      }
    }
  },
  nve = " ",
  Vhr = {
    id: "02_extraSpaceTest",
    content: `\`\`\`typescript:backend/server/src/aiHandlers/fastApply/modelProperties.ts${nve}
// This module defines various properties and utility functions for handling different AI models.
// It includes functions to determine model capabilities, token limits, and other characteristics.

import { Ctxt, RequestCtxt } from '../../ctxt/ctxt.js';
// ... existing code ...
\`\`\`${nve}

I added a comment at the top of the file to describe its purpose and contents. This helps provide context to anyone reading or maintaining the code.`,
  },
  qhr = {
    id: "03_windowsNewline",
    content: `hi\r
\`\`\`typescript:fizzbuzz.ts\r
console.log('Hello');\r
console.log('World');\r
console.log('How');\r
console.log('Are');\r
console.log('You');\r
\r
\`\`\`\r
hi${nve}`,
  },
  jhr = {
    id: "04_markdownCodeblocks",
    content: `Alright, let's enhance your \`client/README.md\` by incorporating a description of your codebase. I'll add a section that gives an overview of the project structure and its components. Here's how you can update your README:

\`\`\`\`markdown:client/README.md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [\`create-next-app\`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Overview
This project is a full-stack application that integrates a Next.js client with a Voxelize server. It leverages modern web technologies to deliver a high-performance, interactive experience. The key components of the codebase include:

- **Client**: Built with Next.js, the client handles the frontend logic and UI rendering. It uses \`next/font\` for font optimization and supports hot-reloading for efficient development.
- **Server**: The backend is powered by a Voxelize server, which manages game logic and real-time interactions. It is written in Rust and utilizes the Voxelize engine for voxel-based rendering.
- **Voxelize Engine**: A custom voxel engine that provides fast, multiplayer voxel rendering capabilities. It is designed to be modular and extendable, supporting custom blocks and dynamic meshes.

## Getting Started
First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying \`app/page.tsx\`. The page auto-updates as you edit the file.

This project uses [\`next/font\`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
\`\`\`\`

### Explanation:
- **Project Overview**: Added a new section to describe the overall architecture and components of your project, including the client, server, and Voxelize engine.
- **Client**: Highlighted the use of Next.js and its features.
- **Server**: Mentioned the Voxelize server and its role.
- **Voxelize Engine**: Briefly described the engine's capabilities and purpose.

This should give anyone reading your README a clear understanding of what your project is about and how it's structured.${nve}`,
  },
  zhr = {
    id: "05_bashScriptCodeblocks",
    content: `Certainly! I'll add a check to ensure that if the final tag is empty, it defaults to "1.0.0". Here's the modified part of the script with the necessary changes:

\`\`\`bash:proxies/auth-proxy/pushDocker.sh
# ... existing code ...

TAG=$(++patch $LATEST_IMAGE_NUMBER)

if [[ "$PLAN" == "patch" ]]; then
    TAG=$(++patch $LATEST_IMAGE_NUMBER)
elif [[ "$PLAN" == "minor" ]]; then
    TAG=$(++minor $LATEST_IMAGE_NUMBER)
elif [[ "$PLAN" == "major" ]]; then
    TAG=$(++major $LATEST_IMAGE_NUMBER)
fi

# Check if TAG is empty and set it to "1.0.0" if it is
if [[ -z "$TAG" ]]; then
    TAG="1.0.0"
    echo "No previous version found. Starting with version 1.0.0"
fi

docker tag auth-proxy "946207870883.dkr.ecr.us-east-1.amazonaws.com/$REPOSITORY_NAME:$TAG"
docker push "946207870883.dkr.ecr.us-east-1.amazonaws.com/$REPOSITORY_NAME:$TAG"

# ... rest of the existing code ...
\`\`\`

This modification adds a check after determining the TAG. If the TAG is empty (which could happen if there are no previous versions in the repository), it sets the TAG to "1.0.0" and prints a message to inform the user.

This change ensures that even if there are no previous versions or if the version determination fails for some reason, the script will still proceed with a valid initial version number.${nve}`,
  },
  Jhr = {
    id: "06_rollbackText",
    content: `I understand you want to simplify the rollback process to just mark a specific backend tag as bad in MemoryDB. Let's modify the relevant files to achieve this. We'll focus on updating \`setMemorydbRollbackFlags.ts\` and \`rollback-backend.yml\`.
First, let's update \`setMemorydbRollbackFlags.ts\`:
\`\`\`typescript:backend/scripts/src/setMemorydbRollbackFlags.ts
// ... existing imports ...
async function main() {
  const argv = await yargs(hideBin(process.argv))
    .option('slack-message-ts', { type: 'string', demandOption: true })
    .option('slack-channel-id', { type: 'string', demandOption: true })
    .option('slack-bot-token', { type: 'string', demandOption: true })
    .option('rollback-tag', { type: 'string', demandOption: true })
    .parse();
  const slack = new WebClient(argv.slackBotToken);
  let deploymentStateManager: DeploymentStateManager | null = null;
  try {
    deploymentStateManager = new DeploymentStateManager({ type: 'external' });
    // Mark the tag as bad
    const [flagsSet, error] = await deploymentStateManager.External_markTagAsBad(argv.rollbackTag);
    if (error) {
      throw error;
    }
    // Log the action
    tracerLogger.info(\`Marked tag \${argv.rollbackTag} as bad\`);
    // Send success message to Slack
    await sendSuccessMessage(slack, argv, flagsSet);
  } catch (error) {
    tracerLogger.error({ error }, 'Error setting MemoryDB flags');
    // Send error message to Slack
    await sendError(slack, argv, error);
    process.exit(1);
  } finally {
    // Close the DeploymentStateManager connection
    if (deploymentStateManager) {
      await deploymentStateManager.close();
    }
  }
}
// ... existing helper functions ...
async function sendSuccessMessage(slack: WebClient, argv: any, flagsSet: string[]) {
  await slack.chat.postMessage({
    channel: argv.slackChannelId,
    blocks: [{
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: \`:white_check_mark: Tag marked as bad in MemoryDB:
* Bad tag: \${argv.rollbackTag}
* Actions performed:
\\\`\\\`\\\`
\${flagsSet.join('\\n')}
\\\`\\\`\\\`
\`,
      },
    }],
  });
}
// ... rest of the file ...
\`\`\`
Now, let's update the \`rollback-backend.yml\` workflow:
\`\`\`yaml:.github/workflows/rollback-backend.yml
name: Rollback backend
on:
  workflow_dispatch:
    inputs:
      slack_message_ts:
        description: "Slack message timestamp of source message"
        type: string
        required: true
      slack_channel_id:
        description: "Slack channel ID of source message"
        type: string
        required: true
      slack_user:
        description: "Slack user who issued the command"
        type: string
        required: true
      rollback_tag:
        description: "The backend tag to mark as bad"
        type: string
        required: true
jobs:
  rollback:
    name: Rollback
    runs-on: build-machine
    concurrency: deploy
    defaults:
      run:
        shell: bash
        working-directory: /home/ubuntu/deploys/everysphere-anybot/backend/scripts
    steps:
      - name: Set the MemoryDB rollback flag
        run: |
          source /home/linuxbrew/.linuxbrew/opt/nvm/nvm.sh
          nvm use
          node --experimental-transform-types ./src/setMemorydbRollbackFlags.ts \\
            --slack-message-ts \${{ inputs.slack_message_ts }} \\
            --slack-channel-id \${{ inputs.slack_channel_id }} \\
            --slack-bot-token \${{ secrets.DEPLOY_SLACK_BOT_TOKEN }} \\
            --rollback-tag \${{ inputs.rollback_tag }}
  status:
    name: Status
    needs: rollback
    runs-on: ubuntu-latest
    steps:
      - name: Status Tracking
        uses: anysphere/slack-action-status@main
        env:
          STATUS_CHECKOUT_EMOJI: \u{1F519}
          STATUS_BOOTSTRAP_EMOJI: \u{1F3D7}
          STATUS_BUILD_EMOJI: \u{1F527}
          STATUS_RELEASE_EMOJI: \u{1F4E1}
        with:
          deploy-description: "Marked backend tag \`\${{ inputs.rollback_tag }}\` as bad in MemoryDB"
          step-identifier: d6e26720-da42-4908-8eb9-46667deef133
          slack-bot-token: \${{ secrets.DEPLOY_SLACK_BOT_TOKEN }}
          slack-channel-id: \${{ inputs.slack_channel_id }}
          log-job-name: Rollback
\`\`\`
These changes simplify the rollback process to focus solely on marking a specific backend tag as bad in MemoryDB. Here's a summary of the updates:
1. In \`setMemorydbRollbackFlags.ts\`:
   - Simplified the command-line arguments to only require the necessary information.
   - Removed the logic for handling 'stable' tags and checking available tags.
   - Updated the main function to directly mark the provided tag as bad.
2. In \`rollback-backend.yml\`:
   - Simplified the workflow inputs to only require the necessary information.
   - Removed unnecessary steps and environment variables.
   - Updated the \`setMemorydbRollbackFlags.ts\` call to use the new, simplified arguments.
To use this new rollback process, you would trigger the workflow with the backend tag you want to mark as bad. The workflow will then use \`setMemorydbRollbackFlags.ts\` to mark that tag as bad in MemoryDB and send a Slack notification about the action.
You'll need to update the \`deploy.js\` script to trigger this workflow with the correct inputs when the rollback command is issued.`,
  },
  Ghr = {
    id: "07_tabTest",
    content: `	\`\`\`typescript:backend/server/src/aiHandlers/fastApply/modelProperties.ts
// This module defines various properties and utility functions for handling different AI models.
// It includes functions to determine model capabilities, token limits, and other characteristics.

import { Ctxt, RequestCtxt } from '../../ctxt/ctxt.js';
// ... existing code ...
	\`\`\`

I added a comment at the top of the file to describe its purpose and contents. This helps provide context to anyone reading or maintaining the code.`,
  },
  Khr = {
    id: "08_pythonExplanationTest",
    content: `Let me explain how this script works step by step:
1. The script is designed to copy data between different Azure storage accounts and buckets. Let's break down the main components:

2. Configuration:
- Two lists are defined at the top:

\`\`\`5:16:services/copy_retrieval_buckets/copy_retrieval_buckets.py
LANCEDB_BUCKETS = [
    'lancedb/caselaw/france_case/',
    'lancedb/caselaw/us_case/version_20240501.lance/',
    'lancedb/from-counsel/',
    # Just copy the whole bucket for now for faster prototyping.
    'cuatre/',
    'workforce/',
    'caselaw-sweden/',
    'macfarlanes/',
    'lancedb/memos/',
    'lancedb/eurlex/',
]
\`\`\`

This defines \`LANCEDB_BUCKETS\` containing paths for various data sources like caselaw, memos, etc.

\`\`\`18:22:services/copy_retrieval_buckets/copy_retrieval_buckets.py
RETRIEVAL_BUCKETS = [
    'retrieval',
    'source',
    'hr-workflow',
]
\`\`\`

This defines \`RETRIEVAL_BUCKETS\` with basic bucket names.

3. Storage Account Mapping:
\`\`\`27:44:services/copy_retrieval_buckets/copy_retrieval_buckets.py
SOURCE_DESTINATION_STORAGE_ACCOUNTS = [
    # Copy from the dev bucket to all staging locations.
    ('retrievalblockhaidwus', 'retrievalblockhaiswus', LANCEDB_BUCKETS),
    ('retrievalblockhaidwus', 'retrievalblockhaiseus', LANCEDB_BUCKETS),
    ('retrievalblockhaidwus', 'retrievalblockhaisweu', LANCEDB_BUCKETS),
    ('retrievalblockhaidwus', 'retrievalblockhaisgwc', LANCEDB_BUCKETS),
    # Copy from the given staging location to the given prod location.
    ('retrievalblockhaiswus', 'retrievalblockhaipwus', LANCEDB_BUCKETS),
    ('retrievalblockhaiseus', 'retrievalblockhaipeus', LANCEDB_BUCKETS),
    ('retrievalblockhaisweu', 'retrievalblockhaipweu', LANCEDB_BUCKETS),
    ('retrievalblockhaisgwc', 'retrievalblockhaipgwc', LANCEDB_BUCKETS),
]
\`\`\`

\`SOURCE_DESTINATION_STORAGE_ACCOUNTS\` defines tuples of:
- Source storage account
- Destination storage account
- Which bucket list to copy (either LANCEDB_BUCKETS or RETRIEVAL_BUCKETS)

4. Main Logic:
\`\`\`47:69:services/copy_retrieval_buckets/copy_retrieval_buckets.py
def main(dry_run: bool):
    for source_storage_account, dest_storage_account, buckets in SOURCE_DESTINATION_STORAGE_ACCOUNTS:
        for bucket in buckets:
            if dry_run:
                print(f'Dry running copying {bucket} from {source_storage_account} to {dest_storage_account}')
            else:
                print(f'Copying {bucket} from {source_storage_account} to {dest_storage_account}')
            cmd = [
                'azcopy',
                'sync',
                f'https://{source_storage_account}.blob.core.windows.net/{bucket}',
                f'https://{dest_storage_account}.blob.core.windows.net/{bucket}',
                '--s2s-preserve-access-tier=false',
                '--log-level=INFO',
            ]
            if dry_run:
                cmd.append('--dry-run')
            subprocess.run(cmd, check=True)
\`\`\`

The script is designed to:
- Copy data between Azure storage accounts in an organized way
- Support both development->staging->production promotion paths
- Allow dry runs to verify what would be copied
- Use azcopy's sync functionality for efficient transfers`,
  },
  Yhr = {
    id: "09_markdownCodeblocks2",
    content: `Alright, let's enhance your \`client/README.md\` by incorporating a description of your codebase. I'll add a section that gives an overview of the project structure and its components. Here's how you can update your README:

\`\`\`markdown:client/README.md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [\`create-next-app\`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Overview
This project is a full-stack application that integrates a Next.js client with a Voxelize server. It leverages modern web technologies to deliver a high-performance, interactive experience. The key components of the codebase include:

- **Client**: Built with Next.js, the client handles the frontend logic and UI rendering. It uses \`next/font\` for font optimization and supports hot-reloading for efficient development.
- **Server**: The backend is powered by a Voxelize server, which manages game logic and real-time interactions. It is written in Rust and utilizes the Voxelize engine for voxel-based rendering.
- **Voxelize Engine**: A custom voxel engine that provides fast, multiplayer voxel rendering capabilities. It is designed to be modular and extendable, supporting custom blocks and dynamic meshes.

## Getting Started
First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying \`app/page.tsx\`. The page auto-updates as you edit the file.

This project uses [\`next/font\`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
\`\`\`

### Explanation:
- **Project Overview**: Added a new section to describe the overall architecture and components of your project, including the client, server, and Voxelize engine.
- **Client**: Highlighted the use of Next.js and its features.
- **Server**: Mentioned the Voxelize server and its role.
- **Voxelize Engine**: Briefly described the engine's capabilities and purpose.

This should give anyone reading your README a clear understanding of what your project is about and how it's structured.`,
  },
  Xhr = {
    id: "10_gitGraphLocalAnalysis",
    content: `### *Analysis of Your gitGraphLocal.ts Code*
You've provided a code snippet from gitGraphLocal.ts, which processes similar files and their relevant line ranges. Let's examine the code to ensure it correctly:
*Accumulates weights per file*
*Collects and merges ranges appropriately*
Here's the code snippet in question:
\`\`\`typescript:vscode/extensions/cursor-retrieval/src/gitGraphLocal/gitGraphLocal.ts

// Group results by file path
const fileResults = new Map<string, {
    weight: number,
    ranges: RangeWithWeight[]
}>();

const promises = [];
for (let line = startLine; line < endLine; line++) {
    promises.push(gitFile.findSimilarFiles(line));
}

const results = await Promise.all(promises);
for (const candidates of results) {
    for (const candidate of candidates) {
        const existing = fileResults.get(candidate.path) || { weight: 0, ranges: [] };

        // Add a range for each location
        candidate.locations.forEach(loc => {
            existing.ranges.push({
                range: {
                    startLineNumber: loc,
                    endLineNumberExclusive: loc + 1
                },
                weight: candidate.weight
            });
        });

        existing.weight += candidate.weight;
        fileResults.set(candidate.path, existing);
    }
}

// Convert to final format with merged ranges
const finalResults = Array.from(fileResults.entries())
    .map(([path, data]) => ({
        absolutePath: path,
        weight: data.weight,
        ranges: mergeRanges(data.ranges).map(r => r.range)
    }))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, maxNumFiles);

return finalResults;
\`\`\`
#### *Understanding the Current Code*
*Collecting Similar Files for Each Line:*
For each line in the given range (startLine to endLine), you're calling gitFile.findSimilarFiles(line).
This returns an array of candidates for each line, where each candidate includes:
candidate.path: The file path of the similar file.
candidate.weight: A weight value indicating similarity.
candidate.locations: An array of line numbers in the candidate file that are similar.
2. *Aggregating Results Per File:*
You use a Map (fileResults) to group candidates by their file paths (candidate.path).
For each candidate:
*Ranges*: You add a RangeWithWeight for each location in candidate.locations with candidate.weight.
*Weight*: You increment the total weight for the file by candidate.weight.
3. *Merging Ranges and Preparing Final Results:*
After processing all candidates, you:
Merge the ranges for each file using mergeRanges(data.ranges).
Create the final result array (finalResults), sorted by weight.
#### *Potential Issues and Corrections*
There are some issues with the current implementation that may lead to incorrect weight calculations and duplicate counting.
---
##### *Issue 1: Overcounting Weights for Files*
*Problem:*
*Double-Counting Weights:* If the same file (candidate.path) appears multiple times (e.g., because multiple lines in your input range are similar to lines in the candidate file), you're adding candidate.weight multiple times to existing.weight.
This means that the total weight for a file is *multiplied by the number of times it appears*, which may not reflect the actual similarity.
*Example Scenario:*
Suppose candidate.weight is 0.5, and the same candidate file appears for 5 different lines in your input range.
The current code sums candidate.weight 5 times, resulting in a total weight of 2.5 for that file.
However, if candidate.weight is meant to represent the overall similarity between the files, summing it multiple times inflates the weight.
*Recommendation:*
*Avoid Summing candidate.weight Multiple Times for the Same File.*
Instead, set existing.weight to the *maximum* or *average* weight, depending on your needs.
---
##### *Issue 2: Assigning the Same candidate.weight to Each Range*
*Problem:*
You're assigning the same candidate.weight to each RangeWithWeight in existing.ranges, regardless of how many times a line is similar.
This might not accurately represent the weight of each line range in the candidate file, especially if different lines have different weights.
*Recommendation:*
If candidate.weight is intended to represent the weight for the entire candidate file, you might want to adjust the weights for individual ranges accordingly.
---
##### *Suggested Code Modifications*
To address these issues, consider the following changes:
---
###### *1. Modify Weight Accumulation per File*
*Change from adding candidate.weight multiple times to storing the maximum weight per file.*
*Updated Code:*
\`\`\`typescript
// Initialize or retrieve existing data for the candidate file
const existing = fileResults.get(candidate.path) || { weight: 0, ranges: [] };

// Update the weight to be the maximum of the existing weight and candidate.weight
existing.weight = Math.max(existing.weight, candidate.weight);

// Add a range for each location
candidate.locations.forEach(loc => {
    existing.ranges.push({
        range: {
            startLineNumber: loc,
            endLineNumberExclusive: loc + 1
        },
        weight: candidate.weight
    });
});

fileResults.set(candidate.path, existing);
\`\`\`
*Explanation:*
*Weight Calculation:* By using Math.max(existing.weight, candidate.weight), you ensure that the file's weight reflects the highest similarity score without overcounting.
*Alternative Approaches:*
*Average Weight:* If you prefer to average the weights:
\`\`\`typescript
    existing.weight = (existing.weight * existing.count + candidate.weight) / (existing.count + 1);
    existing.count = (existing.count || 0) + 1;
\`\`\`
*Sum of Unique Weights:* If candidates can have different weights, you might collect unique weights and sum those.
---
###### *2. Adjust Range Weights if Necessary*
If individual line weights are significant, and you receive different weights for different line similarities, ensure that:
*Each Range's Weight Reflects Individual Similarity:*
If candidate.weight is intended to represent the weight for the entire candidate file, you might want to adjust the weights for individual ranges accordingly.
If all locations share the same candidate.weight, then the current assignment is acceptable.
---
###### *3. Update Weight in Final Results After Merging Ranges*
After merging ranges, you might want to *recalculate the total weight per file* based on the merged ranges.
*Updated Code:*
\`\`\`typescript
const finalResults = Array.from(fileResults.entries())
    .map(([path, data]) => {
        const mergedRanges = mergeRanges(data.ranges);

        // Recalculate the total weight as the sum of weights of merged ranges
        const totalWeight = mergedRanges.reduce((sum, range) => sum + range.weight, 0);

        return {
            absolutePath: path,
            weight: totalWeight,
            ranges: mergedRanges.map(r => r.range)
        };
    })
    .sort((a, b) => b.weight - a.weight)
    .slice(0, maxNumFiles);
\`\`\`
*Explanation:*
*Total Weight Calculation:* By summing the weights of the merged ranges, you ensure that the file's weight reflects the cumulative weight of its relevant ranges.
---
##### *Revised Full Code Block*
Here is the updated code with the suggested changes:
\`\`\`typescript:vscode/extensions/cursor-retrieval/src/gitGraphLocal/gitGraphLocal.ts

// Group results by file path
const fileResults = new Map<string, {
    ranges: RangeWithWeight[]
}>();

const promises = [];
for (let line = startLine; line < endLine; line++) {
    promises.push(gitFile.findSimilarFiles(line));
}

const results = await Promise.all(promises);
for (const candidates of results) {
    for (const candidate of candidates) {
        const existing = fileResults.get(candidate.path) || { ranges: [] };

        // Add a range for each location
        candidate.locations.forEach(loc => {
            existing.ranges.push({
                range: {
                    startLineNumber: loc,
                    endLineNumberExclusive: loc + 1
                },
                weight: candidate.weight
            });
        });

        fileResults.set(candidate.path, existing);
    }
}

// Convert to final format with merged ranges and recalculate weights
const finalResults = Array.from(fileResults.entries())
    .map(([path, data]) => {
        const mergedRanges = mergeRanges(data.ranges);

        // Calculate total weight as the sum of weights of merged ranges
        const totalWeight = mergedRanges.reduce((sum, range) => sum + range.weight, 0);

        return {
            absolutePath: path,
            weight: totalWeight,
            ranges: mergedRanges.map(r => r.range)
        };
    })
    .sort((a, b) => b.weight - a.weight)
    .slice(0, maxNumFiles);

return finalResults;
\`\`\`
*Changes Made:*
*Removed weight from fileResults Map:*
Since weight is recalculated after merging, we no longer need to accumulate it in the map.
*Recalculated Total Weight After Merging:*
Summed the weights of merged ranges to obtain the total weight per file.
---
#### *Additional Considerations*
*Ensure Correctness of candidate.weight:*
Confirm that candidate.weight accurately represents the similarity score for the specific line or range.
If weights vary per line, your current approach to assign candidate.weight to each RangeWithWeight is appropriate.
2. *Avoid Duplicate Ranges:*
If there's a possibility of duplicate ranges being added, consider adding logic to prevent duplicates before merging.
3. *Understand the Semantics of Weights:*
Decide whether weights should be summed, averaged, or maximized based on what the weights represent in your context (e.g., frequency, similarity score).
4. *Test Thoroughly:*
After making changes, update your tests or add new ones to cover these scenarios.
Ensure that the mergeRanges function still works correctly with these changes.
---
### *Conclusion*
*Issue Identified:* The total weight per file may be overcounted due to summing candidate.weight multiple times for the same file.
*Solution Proposed:*
Remove incremental addition of candidate.weight to existing.weight.
Recalculate the total weight after merging ranges by summing the weights of the merged ranges.
*Benefits:*
Ensures that the total weight per file accurately reflects the cumulative weight of its relevant ranges.
Prevents overcounting and provides a more accurate representation of similarity.
---
### *Next Steps*
*Implement the suggested code changes in your gitGraphLocal.ts file.*
*Run your test suite to verify that the changes produce the expected results.*
*Review the logic of candidate.weight and adjust as necessary to reflect the true similarity scores in your application.*
---
Let me know if you have any questions or need further clarification on any part of this solution!`,
  },
  Qhr = {
    id: "11_cppServiceAnalysis",
    content: `Let me analyze the \`cppService.ts\` in more detail by looking at its key functionalities:

1. **Stream Management & State**:
\`\`\`typescript
private streams: CppStream[] = [];
private streamingAbortControllers: Map<string, AbortController>;
\`\`\`
- Manages multiple concurrent completion streams
- Handles abort controllers for cancellation
- Tracks generation UUIDs and states

2. **Cache & History Management**:
\`\`\`typescript
private cachedDiffHistories = new LRUCache<string, PlainMessage<CppFileDiffHistory>[]>(10);
private cachedPreviousModelValues = new LRUCache<string, string>(3);
private editsCacheForWordAccepts: EditsCache = new EditsCache(2);
private suggestionsCache: SuggestionsCache = new SuggestionsCache(5, 6);
\`\`\`
- Multiple specialized caches for different purposes
- LRU (Least Recently Used) caching strategy
- Diff history tracking
- Previous model values storage

3. **Editor Integration**:
\`\`\`typescript
private modelListeners = new Map<string, Map<string, IDisposable[]>>();
private editorListeners: Map<string, IDisposable[]> = new Map();
\`\`\`
- Deep VSCode editor integration
- Model and editor event listeners
- Disposable resource management
- Editor state tracking

4. **Suggestion Management**:
\`\`\`typescript
private createOrUpdateSuggestionState(partialSuggestion: Partial<CppSuggestion>) {
    // ... suggestion state management
}
\`\`\`
- Creates and updates suggestions
- Manages suggestion states
- Handles suggestion decorations
- Tracks suggestion visibility

5. **Cursor Prediction**:
\`\`\`typescript
private isFusedCursorPredictionTooCloseToCursor(fusedCursorPrediction: FusedCursorPrediction, position: Position) {
    // ... cursor prediction logic
}
\`\`\`
- Predicts cursor movements
- Handles fused cursor predictions
- Manages cursor positions
- Validates predictions

6. **Performance Features**:
\`\`\`typescript
private maxConcurrentCppRequests = 6;
private debouncer: Debouncer;
\`\`\`
- Concurrent request limiting
- Request debouncing
- Performance optimization
- Resource management

7. **UI Management**:
\`\`\`typescript
private readonly statusbarElement = this._register(new MutableDisposable<IStatusbarEntryAccessor>());
private readonly statusBarHoverElement = document.createElement('div');
\`\`\`
- Status bar integration
- UI element management
- Visual feedback
- Hover functionality

8. **Code Analysis**:
\`\`\`typescript
private overlapsInlineDiff(uri: URI, lineNumber: number): boolean
private getModelValueAfterChange(model: ITextModel, range: SimpleRange, text: string): string
\`\`\`
- Code diff analysis
- Model value tracking
- Range management
- Text change handling

9. **Context Management**:
\`\`\`typescript
async getPartialCppRequest({ editor, uri, modelValue, modelVersion, position, source, shouldRelyOnFileSyncForFile }) {
    // ... context gathering logic
}
\`\`\`
- Gathers editor context
- Manages file synchronization
- Handles model versions
- Tracks source information

10. **Error Handling**:
\`\`\`typescript
private recentDiagnostics: {
    errors: {
        message: string,
        source: string,
        uri: string,
        // ... more error properties
    }[]
}
\`\`\`
- Diagnostic tracking
- Error collection
- Error reporting
- Error analysis

11. **Decoration Management**:
\`\`\`typescript
private getSuggestionDecorationOptions(originalRange: { startLineNumber: number, ... }, highlightBackground: boolean)
private createSuggestionDecoration(textModel: ITextModel, originalRange: PlainMessage<SimpleRange>, highlightBackground: boolean): string
\`\`\`
- Manages code decorations
- Handles highlighting
- Range visualization
- Style management

12. **File Synchronization**:
\`\`\`typescript
private getCurrentReplaceText(model: ITextModel)
private updateVisibleSuggestionText(editor: ICodeEditor, changes: DiffObj[], ...)
\`\`\`
- Handles text replacements
- Manages visible suggestions
- Synchronizes changes
- Updates UI

The service is designed with careful attention to:
- Performance optimization through caching and debouncing
- Resource management with disposables
- Robust error handling and diagnostics
- Sophisticated UI integration
- Deep editor integration
- Comprehensive state management
- Advanced cursor prediction
- Efficient suggestion handling

It's a core part of the IDE's AI capabilities, managing everything from simple code completions to complex cursor predictions while maintaining performance and reliability.`,
  },
  Zhr = {
    id: "12_laravelDashboardDate",
    content: `I'll help you modify the \`dashboard.blade.php\` file to show the current date instead of the "You're logged in!" message. Here's how you can change it:

\`\`\`php
<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    {{ now()->format('Y-m-d') }}
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
\`\`\`

I replaced \`{{ __("You're logged in!") }}\` with \`{{ now()->format('Y-m-d') }}\`, which will display the current date in YYYY-MM-DD format.

If you want to display the date in a different format, you can modify the format string. For example:
- For date and time: \`{{ now()->format('Y-m-d H:i:s') }}\`
- For a more readable format: \`{{ now()->format('F j, Y') }}\` (will show something like "January 1, 2024")
- For local format: \`{{ now()->toFormattedDateString() }}\`

Choose the format that best suits your needs!`,
  },
  edr = {
    id: "13_regexMultipleMatches",
    content: `Let me analyze the code and explain what happens if there are multiple matches in the regex pattern for outdated file contents.

\`\`\`python:modeling/agentic_composer/datagen_utils.py!information
def mask_assistant_messages_before_file_contents(messages: List[Dict[str, Any]]) -> None:
    relative_paths_with_outdated_file_contents = {}
    for msg in messages:
        if msg["role"] == "user" and "\\n(outdated)\\n\`\`\`" in msg["content"]:
            m = re.search(r"\`\`\`[a-zA-Z0-9_]+\\:([S]+)\\n(outdated)\\n\`\`\`", msg["content"])
            if m:
                relative_paths_with_outdated_file_contents[m.group(1)] = msg["content"]
\`\`\`

You're right to question this. The current implementation has a potential issue with multiple matches. Here's what happens:

1. The code uses \`re.search()\` which only finds the first match in the string
2. If a user message contains multiple outdated file contents blocks, only the first one will be captured
3. The match is stored in a dictionary with the file path as the key

This means if there are multiple outdated file blocks in a single user message, only the first one will be stored in the \`relative_paths_with_outdated_file_contents\` dictionary.

To handle multiple matches, we should use \`re.findall()\` or \`re.finditer()\`. Here's how we could improve this:

\`\`\`python:modeling/agentic_composer/datagen_utils.py!information
def mask_assistant_messages_before_file_contents(messages: List[Dict[str, Any]]) -> None:
    relative_paths_with_outdated_file_contents = {}
    for msg in messages:
        if msg["role"] == "user" and "\\n(outdated)\\n\`\`\`" in msg["content"]:
            # Find all matches instead of just the first one
            matches = re.finditer(r"\`\`\`[a-zA-Z0-9_]+\\:([S]+)\\n(outdated)\\n\`\`\`", msg["content"])
            for m in matches:
                relative_paths_with_outdated_file_contents[m.group(1)] = msg["content"]
\`\`\`

This improved version would:
1. Use \`re.finditer()\` to find all matches in the content
2. Iterate through all matches and add each file path to the dictionary
3. Still use the file path as the key, but note that if multiple outdated blocks exist for the same file path, the last one would overwrite earlier ones in the dictionary

If you want to capture all outdated blocks for each file path, you'd need to change the data structure to store lists of contents instead of single strings.`,
  },
  tdr = {
    id: "14_lintsInComposer",
    content: "hi\n\n```typescript\nn = 2\n```\n",
  },
  idr = {
    id: "15_unificationInformationTagExample",
    content: `Based on the codebase, there are several methods to generate deterministic random values from a seed in the backend. Here are the main approaches:

1. Using the \`deterministicMathRandom\` function:

\`\`\`typescript:backend/server/src/utils/random.ts!information
export function deterministicMathRandom(seed: string, salt: string) {
    const hash = createHash('sha256').update(seed + salt).digest('hex');
    const number = parseInt(hash.slice(0, 8), 16);
    return number / 0xffffffff;
}
\`\`\`

2. Using the \`seedrandom\` library for test environments:

\`\`\`typescript:backend/server/src/utils/random.ts!information
import seedrandom from 'seedrandom';

let rng: seedrandom.PRNG | null = null;
if (process.env.NODE_ENV === 'test') {
    // Initialize a seedable RNG with a fixed seed
    rng = seedrandom('fixed-seed');
}

export function MATH_RANDOM_PLEASE_CONSIDER_HOW_THIS_AFFECTS_TEST_COVERAGE(): number {
    if (process.env.NODE_ENV === 'test') {
        if (rng === null) {
            throw new Error('rng is null');
        }
        return rng();
    }
    return Math.random();
}
\`\`\`

3. For array shuffling with an optional seed:

\`\`\`typescript:backend/server/src/base/common/arrays.ts!information
export function shuffle<T>(array: T[], _seed?: number): void {
    let rand: () => number;

    if (typeof _seed === 'number') {
        let seed = _seed;
        // Seeded random number generator in JS
        rand = () => {
            const x = Math.sin(seed++) * 179426549;
            return x - Math.floor(x);
        };
    } else {
        rand = Math.random;
    }
    // ... Fisher-Yates shuffle implementation
}
\`\`\`

The main approaches are:

1. \`deterministicMathRandom\`: Uses SHA-256 hashing to generate a deterministic random number from a string seed and salt
2. \`seedrandom\`: Used in test environments to ensure deterministic randomness
3. \`shuffle\` with seed: Uses a simple mathematical formula based on sine to generate deterministic random numbers

For test environments, the codebase uses a fixed seed ('fixed-seed') with seedrandom to ensure tests are deterministic. For production code, you can use either \`deterministicMathRandom\` if you need string-based seeds, or the \`shuffle\` function's seeding mechanism if you need number-based seeds.

The most robust approach would be to use \`deterministicMathRandom\` as it uses cryptographic hashing to generate the random values, making it more uniformly distributed than the sine-based approach used in \`shuffle\`.`,
  },
  sdr = [
    Ohr,
    Fhr,
    Vhr,
    qhr,
    jhr,
    zhr,
    Jhr,
    Ghr,
    Khr,
    Yhr,
    Xhr,
    Qhr,
    Zhr,
    edr,
    tdr,
    idr,
  ],
  nz = Ve("composerChatService"),
  rz = class extends V {
    constructor(
      e,
      t,
      s,
      n,
      r,
      o,
      a,
      l,
      c,
      u,
      h,
      d,
      g,
      p,
      m,
      v,
      y,
      w,
      C,
      S,
      x,
      k,
      E,
      I,
      L,
      P,
      N,
      R,
      B,
      W,
      G,
      te,
    ) {
      super(),
        (this._composerDataService = e),
        (this._composerUtilsService = t),
        (this._composerViewsService = s),
        (this._composerEventService = n),
        (this._composerCheckpointService = r),
        (this._composerApplyService = o),
        (this._reactiveStorageService = a),
        (this._configurationService = l),
        (this._prettyDialogService = c),
        (this._commandService = u),
        (this._aiService = h),
        (this._aiErrorService = d),
        (this._selectedContextService = g),
        (this._fileService = p),
        (this._cursorAuthenticationService = m),
        (this._repositoryService = v),
        (this._cursorCredsService = y),
        (this._mcpService = w),
        (this._instantiationService = C),
        (this._contextBankService = S),
        (this._workspaceContextService = x),
        (this._toolsV2HandlerRegistryService = k),
        (this._markerService = E),
        (this._toolV2Service = I),
        (this._aiFeatureStatusService = L),
        (this._languageService = P),
        (this._aiAssertService = N),
        (this._composerContextService = R),
        (this._everythingProviderService = B),
        (this._composerModesService = W),
        (this._aiSettingsService = G),
        (this._cursorRulesService = te),
        (this._latestSubmitWarmCacheRequestTimes = []),
        (this._recentTimeWindow = 60 * 1e3),
        (this._maxRecentRequests = 10),
        (this._recentlyResumed = !1),
        (this._skipHandleAbortChat = new Set()),
        (this._chatClient = this._instantiationService.createInstance(_d, {
          service: Tat,
        }))
    }
    async submitChatMaybeAbortCurrent(e, t, s) {
      const n = Date.now()
      try {
        await this._composerUtilsService.ensureCapabilitiesAreLoaded(e)
      } catch (k) {
        console.error("[composer] error ensuring capabilities are loaded", k)
        return
      }
      this._reactiveStorageService.setNonPersistentStorage(
        "showReportFeedbackModal",
        void 0,
      )
      const r = this._composerModesService.getComposerUnifiedMode(e),
        o = this._composerModesService.getModeThinkingLevel(r),
        a = this.getModelDetails(r)
      s?.modelOverride && (a.modelName = s.modelOverride)
      const l = (r === "chat" || s?.isChat) ?? !1
      let c =
        a.modelName === void 0 ||
        this._aiSettingsService.doesModelSupportAgent(a.modelName)
      s = {
        capabilityProcessesToSkip: l
          ? [
              "start-submit-chat",
              "before-submit-chat",
              "after-submit-chat",
              "composer-settled",
            ]
          : s?.capabilityProcessesToSkip,
        ...(s ?? {}),
      }
      const u = this._composerDataService.getComposerFromIdOrHandle(e)
      if (!u) {
        console.error("[composer] submitted without state!")
        return
      }
      if (
        !this.shouldSkipCapabilities(
          s?.capabilityProcessesToSkip,
          "start-submit-chat",
        )
      )
        try {
          if (
            await this._composerUtilsService.runCapabilitiesForProcess(
              e,
              "start-submit-chat",
              {
                composerId: e,
                isCapabilityIteration: s?.isCapabilityIteration,
                submitChatProps: { text: t, extra: s },
              },
            )
          )
            return
        } catch (k) {
          console.error(
            "[composer] error running capabilities for start-submit-chat",
            k,
          ),
            this._composerDataService.updateComposerDataSetStore(e, (E) =>
              E("status", "aborted"),
            )
          return
        }
      let h = new AbortController(),
        d = !1,
        g = !1,
        p = !1,
        m = Mt(),
        v,
        y,
        w = yw()
      const C = () => {
          v &&
            this.submitChatMaybeAbortCurrent(e, t, {
              ...s,
              bubbleId: v.bubbleId,
            })
        },
        S = (k) => {
          const E = this._aiErrorService.shouldShowImmediateErrorMessage(k),
            I = this._composerDataService.getComposerFromIdOrHandle(e),
            L = this._composerDataService.getLastAiBubbleId(e),
            P =
              c &&
              this._composerDataService
                .getLastAiBubbles(e)
                .some((N) => (N.text.length ?? 0) > 0) &&
              !s?.isResume
          if (E && I) {
            const N = vD(k)
            this._composerDataService.updateComposerDataSetStore(e, (R) =>
              R("conversation", (B) => B.bubbleId === L, "errorDetails", {
                generationUUID: m,
                error: N,
                message: k?.rawMessage,
                rerun: s?.isResume ? () => this.resumeChat(e, s) : C,
                resume: P
                  ? () => {
                      this.resumeChat(e, s)
                    }
                  : void 0,
              }),
            )
          }
        }
      try {
        let k = function (jt, $s) {
          const Ss = Date.now()
          return jt.finally(() => {
            const vt = Date.now()
            console.log(`[composer.submitChat] ${$s} took ${vt - Ss}ms`)
          })
        }
        var x = k
        this._composerDataService.updateComposerDataSetStore(e, (jt) =>
          jt("status", "generating"),
        ),
          this._composerDataService.updateComposerDataSetStore(e, (jt) =>
            jt("editingBubbleId", void 0),
          ),
          this._composerUtilsService.clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages(
            e,
          )
        const E = async () => {
            const jt = await this._composerDataService
              .getModelDiffStateManager()
              .renderChanges()
            return (
              this._composerDataService.getModelDiffStateManager().reset(), jt
            )
          },
          I = await this._selectedContextService.getHumanChanges(E()),
          L = fDs(u.capabilities)
        if (L.length === 0 && s?.isCapabilityIteration) {
          console.error(
            "[composer] submitted capability iteration without capabilities!",
          )
          return
        }
        this._composerDataService.clearActionButtons(e)
        const P = !s?.isResume
        s.bubbleId = s?.bubbleId ?? u.currentBubbleId
        let N
        s?.shouldCheckout &&
          s?.bubbleId &&
          (N = await this._composerCheckpointService.createCheckoutCallback(
            e,
            s.bubbleId,
            { skipDialog: !0, fromSubmitChat: !0 },
          ))
        let R = !1
        if (s?.bubbleId) {
          const jt = s.bubbleId ?? u.currentBubbleId,
            $s = this._composerDataService.getComposerBubble(e, jt),
            Ss = u.conversation.findIndex((Js) => Js.bubbleId === jt)
          if (!$s) throw Error("[composer] current bubble is undefined")
          let vt
          $s.type === bn.HUMAN
            ? ((vt = Ss !== -1 ? u.conversation[Ss + 1]?.bubbleId : void 0),
              (R = !0))
            : (vt = jt)
          const gi = u.conversation.slice(Ss + 1),
            Ht = u.conversation.slice(0, Ss),
            Zt = (Js) => {
              const Cr = this._composerDataService.getComposerCapability(
                e,
                xn.TOOL_FORMER,
              )
              if (!Cr) return !1
              const ma = Cr.getBubbleData(Js.bubbleId)
              return ma ? ma.tool === Et.RUN_TERMINAL_COMMAND_V2 : !1
            },
            Wi = gi.some(Zt),
            on = Ht.some(Zt)
          if (Wi) {
            const Js = L.find((Cr) => Cr.type === xn.TOOL_FORMER)
            Js && Js.clearSessionId()
          }
          vt && this._composerUtilsService.removeMessagesAfterBubble(e, vt),
            R
              ? (this._composerDataService.updateComposerBubble(e, jt, {
                  ...yD(),
                  bubbleId: jt,
                  richText: s?.richText ?? t,
                  text: t,
                  isCapabilityIteration: s?.isCapabilityIteration,
                  existedSubsequentTerminalCommand: Wi,
                  existedPreviousTerminalCommand: on,
                  humanChanges: I,
                  attachedHumanChanges: u.context.useRecentChanges,
                  skipRendering: !1,
                }),
                console.log(
                  `[composer.submitChat] Time between function start and adding human message: ${Date.now() - n}ms`,
                ))
              : this._composerDataService.updateComposerBubble(e, jt, {
                  existedSubsequentTerminalCommand: Wi,
                  existedPreviousTerminalCommand: on,
                  humanChanges: I,
                  attachedHumanChanges: u.context.useRecentChanges,
                })
        }
        if (s?.isResume || R) {
          const jt = this._composerDataService.getLastHumanBubble(e)
          if (!jt)
            throw new Error(
              "[composer] submitted capability iteration without a last human message!",
            )
          v = jt
        } else
          (v = {
            ...yD(),
            richText: s?.richText ?? t,
            text: t,
            isCapabilityIteration: s?.isCapabilityIteration,
            tokenDetailsUpUntilHere: u.tokenDetails,
            tokenCountUpUntilHere: u.tokenCount,
          }),
            this._composerDataService.updateComposerDataSetStore(e, (jt) =>
              jt("conversation", [...u.conversation, v]),
            ),
            console.log(
              `[composer.submitChat] Time between function start and adding human message: ${Date.now() - n}ms`,
            )
        N && (await N())
        let B = z_(u.context)
        if (
          (s?.isCapabilityIteration ||
            (P && this._composerUtilsService.clearText(e),
            this._composerViewsService.focus(e, !0)),
          s?.bubbleId !== void 0)
        ) {
          const jt = this._composerDataService.getComposerBubble(e, s.bubbleId)
          if (jt && jt.context) {
            const $s = jt.context
            B = z_($s)
            const Ss = mvs(z_($s))
            this._composerDataService.updateComposerDataSetStore(e, (vt) =>
              vt("context", Ss),
            )
          }
        }
        this._composerDataService.updateComposerDataSetStore(e, (jt) =>
          jt("currentBubbleId", void 0),
        ),
          this._composerDataService.updateComposerDataSetStore(e, (jt) =>
            jt("latestCheckpoint", void 0),
          )
        const W = {
          ...B,
          usesCodebase:
            B.usesCodebase !== void 0 && B.usesCodebase !== !1
              ? B
              : s?.usesCodebase,
          useDiffReview: B.useDiffReview ?? s?.useDiffReview,
        }
        if (
          !s?.isCapabilityIteration &&
          !s?.isResume &&
          (this._composerContextService.removeNonPersistentContext(e), l)
        ) {
          this._composerContextService.removeAllListContext({
            composerId: e,
            contextType: "fileSelections",
            addToUndoRedo: !1,
          })
          const jt = this._composerUtilsService.getCurrentFile()
          jt !== void 0 &&
            B.fileSelections.some(
              ($s) => vv("fileSelections", $s) === vv("fileSelections", jt),
            ) &&
            this._composerContextService.resetContext(e)
        }
        if (!s?.isResume) {
          const jt =
            await this._composerCheckpointService.createCurrentCheckpoint(e)
          this._composerDataService.updateComposerBubble(e, v.bubbleId, {
            checkpoint: jt,
            context: W,
          })
        }
        console.log(
          `[composer.submitChat] Time between function start and handling context / checkpoints: ${Date.now() - n}ms`,
        )
        const G = await this._aiService.aiClient()
        let te
        const re = W.fileSelections.map((jt) => CR(jt)),
          Z = l
            ? []
            : this._composerDataService
                .getUrisOfCodeblocksInLastAiBubbles(u.composerId)
                .map((jt) => jt.toString()),
          ve = (
            await Promise.all(
              (
                await Promise.all(
                  Array.from(new Set([...re, ...Z])).map(async (jt) => ({
                    uri: jt,
                    exists: await this._fileService.exists(H.parse(jt)),
                  })),
                )
              )
                .filter((jt) => jt.exists)
                .map((jt) => jt.uri),
            )
          ).map((jt) => ({ uri: H.parse(jt), fileName: hn(jt) }))
        if (
          ((w = { ...W, fileSelections: ve }),
          (c || w.usesCodebase) &&
            this._reactiveStorageService.applicationUserPersistentStorage
              .checklistState?.doneCommandEnter !== !0)
        ) {
          const jt =
            this._reactiveStorageService.applicationUserPersistentStorage
              .checklistState
          this._reactiveStorageService.setApplicationUserPersistentStorage(
            "checklistState",
            ($s) => ({ ...($s ?? {}), doneCommandEnter: !0 }),
          )
        }
        if (
          !this.shouldSkipCapabilities(
            s?.capabilityProcessesToSkip,
            "before-submit-chat",
          )
        )
          try {
            if (
              await this._composerUtilsService.runCapabilitiesForProcess(
                e,
                "before-submit-chat",
                {
                  composerId: e,
                  humanBubbleId: v.bubbleId,
                  isCapabilityIteration: s?.isCapabilityIteration,
                  contextUsed: w,
                  submitChatProps: { text: t, extra: s },
                },
              )
            )
              return
          } catch (jt) {
            console.error(
              "[composer] error running capabilities for before-submit-chat",
              jt,
            )
            return
          }
        if (u.chatGenerationUUID) {
          const jt = u.chatGenerationUUID
          this._composerDataService.updateComposerDataSetStore(e, ($s) =>
            $s("chatGenerationUUID", void 0),
          ),
            this._skipHandleAbortChat.add(e),
            this._composerUtilsService.abortGenerationUUID(jt),
            await new Promise(($s) => setTimeout($s, 50)),
            this._skipHandleAbortChat.delete(e)
        }
        ;(h = this._aiService.registerNewGeneration({
          generationUUID: m,
          metadata: l
            ? {
                type: "chat",
                tabId: u.composerId,
                bubbleId: v.bubbleId,
                chatType: "chat",
              }
            : { type: "composer", textDescription: t },
        })[1]),
          this._composerDataService.updateComposerData(e, {
            chatGenerationUUID: m,
            latestChatGenerationUUID: m,
            generatingBubbleIds: [],
            status: "generating",
            lastUpdatedAt: Date.now(),
          })
        const pe = u.conversation.at(-1),
          ge =
            s?.isResume && pe?.type === bn.AI && pe?.capabilityType === void 0
        if (ge) {
          if (!pe)
            throw new Error(
              "[composer] submitted capability iteration without a last ai message!",
            )
          y = pe
        } else
          y = {
            ...yD(),
            codeBlocks: [],
            type: bn.AI,
            text: "",
            isCapabilityIteration: s?.isCapabilityIteration,
            isChat: l,
            timingInfo: { clientStartTime: n, clientRpcSendTime: Date.now() },
          }
        const Oe = this.isUsingAPIKeys(),
          Ie = this._cursorAuthenticationService.membershipType()
        if (
          Oe &&
          !l &&
          Ie === Vr.FREE &&
          this._cursorAuthenticationService.isAuthenticated()
        ) {
          console.log({
            isUsingApiKey: Oe,
            isChat: l,
            membershipType: Ie,
            isAuthenticated:
              this._cursorAuthenticationService.isAuthenticated(),
          })
          const jt = { status: "aborted" }
          ge || (jt.conversation = [...u.conversation, y]),
            this._composerDataService.updateComposerData(e, jt),
            this._composerDataService.updateComposerDataSetStore(e, ($s) =>
              $s(
                "conversation",
                (Ss) => Ss.bubbleId === y.bubbleId,
                "errorDetails",
                {
                  generationUUID: m,
                  error: new YW({
                    error: no.UNSPECIFIED,
                    details: {
                      title: "Cursor Pro Required",
                      detail:
                        "Agent and Edit rely on custom models that cannot be billed to an API key. Please use a Pro or Business subscription and/or disable API keys. Ask should still work.",
                    },
                  }),
                  message:
                    "Agent and Edit rely on custom models that cannot be billed to an API key. Please use a Pro or Business subscription and/or disable API keys. Ask should still work.",
                  rerun: C,
                },
              ),
            )
          return
        }
        const qe = Date.now(),
          et = ve.map((jt) => jt.uri)
        let We = !l || (w.useLinterErrors && c)
        const xe = k(
            We
              ? this._selectedContextService.getLinterErrorsForFiles(et)
              : Promise.resolve([]),
            "getPerMessageLinterErrors",
          ),
          lt = k(
            this._selectedContextService.getCodeChunks({
              ...w,
              folderSelections: c ? [] : w.folderSelections,
            }),
            "getCodeChunks",
          ),
          Ut = k(
            this._composerDataService.getRelevantFiles(e),
            "getRelevantFiles",
          ),
          Ye = k(this.getEnvironmentInfo(), "getEnvironmentInfo"),
          Fe = k(
            l
              ? Promise.resolve({
                  recentlyViewedFiles: [],
                  recentLocationsHistory: [],
                })
              : this._composerUtilsService.getRecentlyViewedFileInfo(lt),
            "getRecentlyViewedFileInfo",
          ),
          [Xe, zt, dt, ut] = await Promise.all([xe, lt, Ut, Ye])
        console.log(
          `[composer.submitChat] Time taken to process context: ${Date.now() - qe}ms`,
        ),
          (te = Xe),
          this._composerDataService.updateComposerDataSetStore(e, (jt) =>
            jt("conversation", ($s) => $s.bubbleId === v.bubbleId, {
              relevantFiles: [
                ...dt.map(($s) =>
                  this._workspaceContextService.asRelativePath(
                    H.revive($s.uri),
                  ),
                ),
              ],
              multiFileLinterErrors: [
                ...te.map(($s) => new Tp({ ...$s, fileContents: void 0 })),
              ],
              humanChanges: I,
              attachedHumanChanges: W.useRecentChanges,
              isAgentic: c,
              unifiedMode: this.getUnifiedMode(r),
            }),
          )
        const ht = Af(u.conversation).map((jt) => ({ ...jt })),
          ti = ht.findIndex((jt) => jt.bubbleId === v.bubbleId)
        ht[ti].attachedCodeChunks = zt
        const ot = [...ht]
            .reverse()
            .map((jt) => jt.conversationSummary)
            .filter((jt) => jt !== void 0)[0],
          Ct = ot?.clientShouldStartSendingFromInclusiveBubbleId
        let ii = Ct
          ? ht.findIndex((jt) => (jt.serverBubbleId ?? jt.bubbleId) === Ct)
          : 0
        ii === -1 && (ii = 0)
        const fi = ht.slice(ii),
          si = await this.populateCodeChunksInConversation(e, fi)
        let ft = si
        l ||
          (ft =
            await this._composerUtilsService.populateRedDiffsInConversation(si))
        for (const jt of ft)
          this._composerDataService.updateComposerDataSetStore(e, ($s) =>
            $s(
              "conversation",
              (Ss) => Ss.bubbleId === jt.bubbleId,
              "diffsForCompressingFiles",
              jt.diffsForCompressingFiles,
            ),
          )
        let Ri = ""
        const Rt = Date.now(),
          us =
            await this._composerUtilsService.populateConversationWithExtraContext(
              ft,
              e,
              {
                lastBubbleContext: w,
                removeContext: (jt) =>
                  this._composerContextService.removeContext({
                    ...jt,
                    composerIdOrHandle: e,
                  }),
              },
            )
        console.log(
          `[composer] Time taken to process extra context: ${Date.now() - Rt}ms`,
        ),
          await (async () => {
            if (h.signal.aborted) return
            const jt = Date.now()
            try {
              const $s = us
              let Ss = await this._aiService.getCurrentFileInfo()
              const vt = await this._repositoryService.getNewRepoInfo()
              let gi
              vt &&
                this._repositoryService.isIndexedMainLocalRepository() &&
                (gi = new Sl(vt))
              const Ht =
                  await this._toolsV2HandlerRegistryService.getAvailableTools(
                    u,
                    r,
                  ),
                Wi = this._composerModesService.getMode(r)?.mcpEnabled ?? !1,
                on = !c
              let Js
              Ht.includes(Et.EDIT_FILE)
                ? (Js = !0)
                : (Js =
                    !this._composerModesService.getModeShouldAutoApplyIfNoEditTool(
                      r,
                    ))
              const Cr = this._composerModesService.isModeChatLike(r),
                ma = a.modelName === "claude-3.7-sonnet-thinking-max",
                wt = {
                  conversation: $s,
                  fullConversationHeadersOnly: $s.map((ql) => ({
                    bubbleId: ql.bubbleId,
                    type: ql.type,
                    serverBubbleId: ql.serverBubbleId,
                  })),
                  conversationSummary: ot,
                  allowLongFileScan: !0,
                  explicitContext: await this._aiService.getExplicitContext(r),
                  documentationIdentifiers: (w.selectedDocs ?? []).map(
                    (ql) => ql.docId,
                  ),
                  quotes: w.quotes ?? [],
                  canHandleFilenamesAfterLanguageIds: !0,
                  modelDetails: a,
                  multiFileLinterErrors: [],
                  useWeb: w.useWeb ? "full_search" : void 0,
                  externalLinks: w.externalLinks ?? [],
                  diffsForCompressingFiles: [],
                  shouldCache:
                    this._reactiveStorageService
                      .applicationUserPersistentStorage.cacheComposerPrompts,
                  currentFile: Ss,
                  fileDiffHistories: [],
                  useNewCompressionScheme: !0,
                  additionalRankedContext: [],
                  isChat: !1,
                  conversationId: u.composerId,
                  repositoryInfo: gi,
                  repositoryInfoShouldQueryStaging: this._cursorCredsService
                    .getRepoBackendUrl()
                    .includes("dev-staging.cursor.sh"),
                  repositoryInfoShouldQueryProd:
                    this._cursorCredsService
                      .getRepoBackendUrl()
                      .includes("repo42.cursor.sh") &&
                    !this._cursorCredsService
                      .getBackendUrl()
                      .includes("cursor.sh"),
                  repoQueryAuthToken: "",
                  isHeadless: !1,
                  environmentInfo: ut,
                  isAgentic: c,
                  linterErrors:
                    l && w.useLinterErrors && !c
                      ? await qbs(
                          this._markerService,
                          this._workspaceContextService,
                          this._aiService,
                        )
                      : void 0,
                  supportedTools: Ht,
                  enableYoloMode:
                    this._composerModesService.getModeAutoRun(r) ?? !1,
                  yoloPrompt:
                    this._reactiveStorageService
                      .applicationUserPersistentStorage.composerState
                      .yoloPrompt ?? "",
                  useUnifiedChatPrompt: !1,
                  mcpTools: Wi
                    ? await this._mcpService.getToolsForComposer()
                    : [],
                  useFullInputsContext:
                    !ma &&
                    !this._reactiveStorageService
                      .applicationUserPersistentStorage.fullContextOptions
                      .compress,
                  toolsRequiringAcceptedReturn: fvs,
                  isResume: s?.isResume,
                  allowModelFallbacks:
                    this._reactiveStorageService
                      .applicationUserPersistentStorage.allowModelFallbacks,
                  numberOfTimesShownFallbackModelWarning:
                    this._reactiveStorageService
                      .applicationUserPersistentStorage
                      .numberOfTimesShownFallbackModelWarning ?? 0,
                  unifiedMode: this.getUnifiedMode(r),
                  shouldDisableTools: on,
                  thinkingLevel: this.getThinkingLevel(o),
                  shouldUseChatPrompt: Cr,
                  usesRules: await this._cursorRulesService
                    .getRules({ requireDescription: !0 })
                    .then((ql) => ql.length > 0),
                }
              console.log("[composer] composerChatRequest", wt)
              let Ne
              if (
                !this.shouldSkipCapabilities(
                  s?.capabilityProcessesToSkip,
                  "mutate-request",
                )
              )
                try {
                  await this._composerUtilsService.runCapabilitiesForProcess(
                    e,
                    "mutate-request",
                    {
                      composerId: e,
                      humanBubbleId: v.bubbleId,
                      isCapabilityIteration: s?.isCapabilityIteration,
                      contextUsed: w,
                    },
                    { request: wt },
                  )
                } catch (ql) {
                  if (ql instanceof Ag) Ne = ql
                  else {
                    console.error(
                      "[composer] error running capabilities for mutate-request",
                      ql,
                    )
                    return
                  }
                }
              if (
                ((y.capabilitiesRan =
                  this._composerDataService.getComposerBubble(
                    e,
                    v.bubbleId,
                  )?.capabilitiesRan),
                h.signal.aborted)
              )
                return
              const ze = await this._chatClient.get(),
                Vt = new Rue(wt)
              wt.usesCodebaseResults &&
                (Vt.usesCodebaseResults = new PNt({
                  results: wt.usesCodebaseResults.results,
                  allFiles: wt.usesCodebaseResults.allFiles,
                }))
              let wi
              if (Ne !== void 0)
                wi = (async function* () {
                  throw Ne
                })()
              else {
                const ql = new djt(void 0)
                ql.push(
                  new $O({
                    request: { case: "streamUnifiedChatRequest", value: wt },
                  }),
                )
                const o0 = ze.streamUnifiedChatWithTools(ql, {
                  signal: h.signal,
                  headers: Zo(m),
                })
                wi = this._toolV2Service.toolWrappedStream(ql, o0, h, {
                  composerId: e,
                })
              }
              const Fs = {
                generatingBubbleIds: [
                  ...(u.generatingBubbleIds ?? []),
                  y.bubbleId,
                ],
                status: "generating",
              }
              ge || (Fs.conversation = [...u.conversation, y]),
                this._composerDataService.updateComposerData(e, Fs)
              let Zi = Fx(wi)
              const Nn = this._composerUtilsService.handleStreamComposer({
                streamer: Zi,
                abortController: h,
                generationUUID: m,
                composerId: e,
                startTime: n,
              })
              this._composerEventService.fireDidSendRequest(),
                (async () => {
                  await this._aiFeatureStatusService
                    .maybeRefreshFeatureStatus("keepComposerCacheWarm")
                    .catch(() => {}),
                    this._aiFeatureStatusService.getCachedFeatureStatus(
                      "keepComposerCacheWarm",
                    ) &&
                      (await this.debouncedMaybeKeepComposerCacheWarm(
                        e,
                        m,
                        new cX(wt),
                      ))
                })().catch((ql) => {})
              const pr = this._aiService.streamResponse({
                  modelDetails: a,
                  generationUUID: m,
                  streamer: Nn,
                  streamerURL:
                    xu.typeName + "/" + xu.methods.streamComposer.name,
                  source: "composer",
                  rethrowCancellation: !0,
                  failSilently: !1,
                }),
                Br = await this._composerUtilsService.runCapabilitiesForProcess(
                  e,
                  "process-stream",
                  {
                    composerId: e,
                    humanBubbleId: v.bubbleId,
                    aiBubbleId: y.bubbleId,
                    stream: pr,
                    generationUUID: m,
                    startTime: n,
                    submitChatProps: { text: t, extra: s },
                  },
                ),
                Xo =
                  this._reactiveStorageService.applicationUserPersistentStorage
                    .composerState.selectedFakeStreamerId,
                Hr = Xo ? sdr.find((ql) => ql.id === Xo) : void 0,
                Jo = Hr ? Hhr(Hr)() : Br,
                Dc = this._composerApplyService.processCodeBlocks(e, Jo, {
                  skipOnSettled: this.shouldSkipCapabilities(
                    s?.capabilityProcessesToSkip,
                    "composer-settled",
                  ),
                  isCapabilityIteration: s?.isCapabilityIteration,
                  passTimingInfo: !0,
                  forceIsNotApplied: Js,
                })
              console.log(`[composer] Client-side ttft: ${Date.now() - n}ms`),
                console.log(
                  `[composer.submitChat] Last leg time taken: ${Date.now() - jt}ms`,
                )
              let Rh,
                Zh = y.text,
                Qg = s?.isResume,
                r0 = ""
              for await (const ql of Dc) {
                const o0 = this._composerDataService.getLastAiBubbleId(e)
                if (!o0) throw new Error("[composer] No ai bubble id")
                if (
                  (Rh !== o0 &&
                    ((Rh = o0),
                    (Zh =
                      this._composerDataService.getComposerBubble(e, o0)
                        ?.text ?? "")),
                  (p = !0),
                  ql.timingInfo)
                ) {
                  y.timingInfo &&
                    this._composerDataService.updateComposerDataSetStore(
                      e,
                      (vr) => {
                        vr(
                          "conversation",
                          (qr) => qr.bubbleId === o0,
                          "timingInfo",
                          (qr) => {
                            const Dn = ql.timingInfo
                            if (!(!Dn || !qr))
                              return {
                                ...qr,
                                serverStartTime: Dn.serverStartTime,
                                serverFirstTokenTime: Dn.serverFirstTokenTime,
                                serverRequestSentTime: Dn.serverRequestSentTime,
                                serverEndTime: Dn.serverEndTime,
                              }
                          },
                        )
                      },
                    )
                  continue
                }
                if (
                  this._reactiveStorageService.nonPersistentStorage
                    .composerState.shouldSimulateServerError
                )
                  throw (
                    (console.log("[composer] Simulating server error"),
                    new Ag("Simulated server error"))
                  )
                if (
                  this._reactiveStorageService.nonPersistentStorage
                    .composerState.shouldSimulateTimeoutServerErrorOnce
                ) {
                  console.log("[composer] Simulating timeout server error")
                  const vr = new Ag(
                    "Simulated timeout server error",
                    LC.DeadlineExceeded,
                    void 0,
                    [new YW({ error: no.TIMEOUT })],
                  )
                  throw (
                    (this._reactiveStorageService.setNonPersistentStorage(
                      "composerState",
                      "shouldSimulateTimeoutServerErrorOnce",
                      !1,
                    ),
                    vr)
                  )
                }
                const { text: a0 } = ql
                if (!a0) {
                  ql.isBigFile &&
                    this._composerDataService.updateComposerDataSetStore(
                      e,
                      (vr) => vr("isReadingLongFile", !0),
                    )
                  continue
                }
                u?.isReadingLongFile &&
                  this._composerDataService.updateComposerDataSetStore(
                    e,
                    (vr) => vr("isReadingLongFile", !1),
                  )
                const pn = (vr) => {
                  ;(Zh += vr),
                    (Ri += vr),
                    this._composerDataService.updateComposerDataSetStore(
                      e,
                      (qr) =>
                        qr(
                          "conversation",
                          (Dn) => Dn.bubbleId === o0,
                          "text",
                          Zh,
                        ),
                    )
                }
                if (Qg) {
                  const vr = r0 + a0
                  if (Zh.includes(vr)) {
                    r0 = vr
                    continue
                  } else if (r0 !== "") {
                    const qr = Zh.lastIndexOf(r0),
                      Dn = Zh.slice(qr + r0.length)
                    let Pi = a0
                    a0.startsWith(Dn)
                      ? (Pi = a0.slice(Dn.length))
                      : (Zh = Zh.slice(0, qr + r0.length)),
                      pn(Pi),
                      (Qg = !1)
                    continue
                  } else {
                    let qr = ""
                    for (let Dn = 0; Dn < Zh.length; Dn++) {
                      let Pi = Zh.slice(-Dn - 1)
                      if (a0.startsWith(Pi)) qr = Pi
                      else break
                    }
                    pn(a0.slice(qr.length)), (Qg = !1)
                    continue
                  }
                  Qg = !1
                } else pn(a0)
              }
              ;(g = !0), (this._recentlyResumed = !1)
            } catch ($s) {
              if (
                (console.error("[composer] Error in AI response:", $s),
                $s instanceof Ag && !this._recentlyResumed)
              ) {
                const Ss = vD($s)
                if (Ss && Ss.error === no.TIMEOUT) {
                  ;(this._recentlyResumed = !0), this.resumeChat(e, s)
                  return
                }
              }
              ;(this._recentlyResumed = !1),
                (d = !0),
                this._composerDataService.setGeneratingCodeBlocksToAborted(e),
                this._composerDataService.setGeneratingCapabilitiesToAborted(e),
                this._composerDataService.setGeneratingCapabilityCodeBlocksToAborted(
                  e,
                ),
                S($s)
            }
          })()
      } catch (k) {
        ;(d = !0),
          console.error("[composer] submitChatMaybeAbortCurrent errored!", k)
      } finally {
        const k = h.signal.aborted || u?.status === "aborted"
        v && k && this.handleAbortChat(e, v.bubbleId),
          !p && !k && S(new Ag("No response from model")),
          m && this._composerUtilsService.abortGenerationUUID(m)
        let E
        const I = []
        if (y) {
          const N = u.conversation.findIndex((R) => R.bubbleId === y.bubbleId)
          for (let R = N; R > -1 && R < u.conversation.length; R++) {
            const B = u.conversation[R]
            if (B.type === bn.AI) I.push(B.bubbleId), (E = B.bubbleId)
            else break
          }
        }
        const L = u.conversation.find(
          (N) => N.type === bn.AI && N.bubbleId === E,
        )
        L &&
          L.text === "" &&
          L?.capabilityType === void 0 &&
          L.errorDetails === void 0 &&
          L.serviceStatusUpdate === void 0 &&
          this._composerDataService.updateComposerDataSetStore(e, (N) =>
            N("conversation", (R) =>
              R.filter((B) => B.bubbleId !== L.bubbleId),
            ),
          )
        const P =
          u.chatGenerationUUID !== void 0 &&
          this.isActiveGeneration(u.chatGenerationUUID)
        if (
          (this._composerDataService.updateComposerData(e, {
            generatingBubbleIds:
              u?.generatingBubbleIds?.filter((N) => !I.includes(N)) ?? [],
            chatGenerationUUID: P ? u.chatGenerationUUID : void 0,
          }),
          this._skipHandleAbortChat.has(e) ||
            (!g || !p || d || u?.status === "aborted"
              ? (console.error("[composer] Failed to get complete AI response"),
                u?.conversation.length
                  ? this._composerDataService.updateComposerDataSetStore(
                      e,
                      (N) => N("status", "aborted"),
                    )
                  : this._composerDataService.updateComposerDataSetStore(
                      e,
                      (N) => N("status", "none"),
                    ))
              : this._composerDataService.updateComposerDataSetStore(e, (N) =>
                  N("status", "completed"),
                )),
          !this.shouldSkipCapabilities(
            s?.capabilityProcessesToSkip,
            "after-submit-chat",
          ) &&
            u.status !== "aborted" &&
            E &&
            v)
        )
          try {
            await this._composerUtilsService.runCapabilitiesForProcess(
              e,
              "after-submit-chat",
              {
                composerId: e,
                humanBubbleId: v.bubbleId,
                aiBubbleId: E,
                isCapabilityIteration: s?.isCapabilityIteration,
              },
            )
          } catch (N) {
            console.error(
              "[composer] error running capabilities for after-submit-chat",
              N,
            ),
              this._composerDataService.updateComposerDataSetStore(e, (R) =>
                R("status", "aborted"),
              )
          }
        if (
          (s?.onFinish?.(),
          this._reactiveStorageService.applicationUserPersistentStorage
            .checklistState?.doneCommandL !== !0)
        ) {
          const N =
            this._reactiveStorageService.applicationUserPersistentStorage
              .checklistState
          this._reactiveStorageService.setApplicationUserPersistentStorage(
            "checklistState",
            (R) => ({ ...(R ?? {}), doneCommandL: !0 }),
          )
        }
        if (
          this._reactiveStorageService.applicationUserPersistentStorage
            .checklistState?.doneAddingCodeSelection !== !0 &&
          (w.fileSelections.length > 0 || w.selections.length > 0)
        ) {
          const N =
            this._reactiveStorageService.applicationUserPersistentStorage
              .checklistState
          this._reactiveStorageService.setApplicationUserPersistentStorage(
            "checklistState",
            (R) => ({ ...(R ?? {}), doneAddingCodeSelection: !0 }),
          )
        }
        this.shouldSkipCapabilities(
          s?.capabilityProcessesToSkip,
          "composer-settled",
        ) ||
          this._composerEventService.fireMaybeRunOnComposerSettled({
            composerId: e,
          }),
          await this.renameComposer(e),
          this.updateComposerSummaryIfOutdated(e),
          y &&
            y.timingInfo &&
            this._composerDataService.updateComposerDataSetStore(e, (N) =>
              N(
                "conversation",
                (R) => R.bubbleId === y.bubbleId,
                "timingInfo",
                (R) => {
                  if (R)
                    return {
                      ...R,
                      clientSettleTime: Date.now(),
                      clientEndTime: Date.now(),
                    }
                },
              ),
            )
      }
    }
    async maybeSubmitWarmCacheRequest(e, t, s) {
      if (
        this._reactiveStorageService.applicationUserPersistentStorage
          .cacheComposerPrompts &&
        (this._latestSubmitWarmCacheRequestTimes.push(Date.now()),
        (this._latestSubmitWarmCacheRequestTimes =
          this._latestSubmitWarmCacheRequestTimes.filter(
            (n) => Date.now() - n < this._recentTimeWindow,
          )),
        this._aiAssertService.assert(
          this._latestSubmitWarmCacheRequestTimes.length <=
            this._maxRecentRequests,
          "Too many recent warm cache requests! Please post in #bug-reports!",
        ),
        !(
          this._latestSubmitWarmCacheRequestTimes.length >
          this._maxRecentRequests
        ))
      )
        try {
          let n = this._composerDataService.getComposerData(e)
          if (
            !n ||
            this._composerDataService.getComposerIsAgentic(e) ||
            [...n.conversation].reverse().find((lt) => lt.type === bn.HUMAN)
              ?.isAgentic === !0
          )
            return
          try {
            if (
              await this._composerUtilsService.runCapabilitiesForProcess(
                e,
                "start-submit-chat",
                {
                  composerId: n.composerId,
                  isCapabilityIteration: !1,
                  submitChatProps: { text: t, extra: s },
                  isCacheWarming: !0,
                },
              )
            )
              return
          } catch {
            return
          }
          let a = z_(n.context)
          const l = n.currentBubbleId
          let c = [...n.conversation]
          if (l !== void 0) {
            const lt = this._composerDataService.getComposerBubble(e, l)
            if (!lt) throw Error("[composer] bubble is undefined")
            const Ut = lt.context
            if (!Ut) throw Error("[composer] bubble context is undefined")
            a = z_(Ut)
            const Ye = mvs(z_(Ut))
          }
          const u = a.fileSelections.map((lt) => CR(lt)),
            h = this._composerDataService
              .getUrisOfCodeblocksInLastAiBubbles(n.composerId)
              .map((lt) => lt.toString()),
            g = (
              await Promise.all(
                (
                  await Promise.all(
                    Array.from(new Set([...u, ...h])).map(async (lt) => ({
                      uri: lt,
                      exists: await this._fileService.exists(H.parse(lt)),
                    })),
                  )
                )
                  .filter((lt) => lt.exists)
                  .map((lt) => lt.uri),
              )
            ).map((lt) => ({ uri: H.parse(lt), fileName: hn(lt) })),
            p = {
              ...a,
              usesCodebase:
                a.usesCodebase !== void 0 && a.usesCodebase !== !1 ? a : void 0,
              useDiffReview: !1,
            },
            m = { ...p, fileSelections: g }
          if (m.useWeb || m.usesCodebase) return
          const v = await this._aiService.aiClient(),
            y = yD()
          c = [...c, { ...y, richText: s?.richText ?? t, context: p, text: t }]
          let w,
            C = Mt(),
            [S, x] = this._aiService.registerNewGeneration({
              generationUUID: C,
              metadata: void 0,
            })
          const k = g.map((lt) => lt.uri),
            E = this._selectedContextService.getLinterErrorsForFiles(k),
            I = async () => {
              const lt = await this._composerDataService
                .getModelDiffStateManager()
                .renderChanges()
              return (
                this._composerDataService.getModelDiffStateManager().reset(), lt
              )
            },
            L = this._selectedContextService.getHumanChanges(I()),
            P = this._selectedContextService.getCodeChunks({ ...m }),
            N = this._composerDataService.getRelevantFiles(e),
            R = this._composerUtilsService.getRecentlyViewedFileInfo(P),
            [B, W, G, te, re] = await Promise.all([P, N, E, R, L]),
            Z = c.at(-1)
          if (Z === void 0) throw new Error("last message is undefined")
          ;(n = this._composerDataService.getComposerData(e)),
            (c = [
              ...c.slice(0, -1),
              {
                ...Z,
                attachedCodeChunks: B,
                relevantFiles: [
                  ...W.map((lt) =>
                    this._workspaceContextService.asRelativePath(
                      H.revive(lt.uri),
                    ),
                  ),
                ],
                multiFileLinterErrors: [...G.map((lt) => new ZPt({ ...lt }))],
                humanChanges: re,
                attachedHumanChanges: p.useRecentChanges,
                ...te,
              },
            ])
          const he = this._composerDataService.getComposerId(e),
            ve = await this.populateCodeChunksInConversation(he, c)
          let pe =
            await this._composerUtilsService.populateRedDiffsInConversation(ve)
          if (!this._composerDataService.getComposerData(e) || x.signal.aborted)
            return
          const Oe =
              await this._composerUtilsService.populateConversationWithExtraContext(
                pe,
                e,
                { disableImageRemoval: !0, lastBubbleContext: m },
              ),
            Ie = this._composerModesService.getComposerUnifiedMode(e),
            qe = this.getModelDetails(Ie)
          let et = await this._aiService.getCurrentFileInfo()
          const We = {
            conversationId: n.composerId,
            conversation: Oe,
            allowLongFileScan: !0,
            explicitContext: await this._aiService.getExplicitContext(),
            documentationIdentifiers: (p.selectedDocs ?? []).map(
              (lt) => lt.docId,
            ),
            quotes: m.quotes ?? [],
            canHandleFilenamesAfterLanguageIds: !0,
            modelDetails: qe,
            useWeb: m.useWeb ? "full_search" : void 0,
            externalLinks: m.externalLinks ?? [],
            projectContext: w,
            diffsForCompressingFiles: [],
            shouldCache:
              this._reactiveStorageService.applicationUserPersistentStorage
                .cacheComposerPrompts,
            multiFileLinterErrors: G,
            currentFile: et,
            useNewCompressionScheme: !0,
            additionalRankedContext: [],
            fileDiffHistories: [],
            useUnifiedChatPrompt: !1,
          }
          try {
            await this._composerUtilsService.runCapabilitiesForProcess(
              e,
              "mutate-request",
              {
                composerId: n.composerId,
                humanBubbleId: y.bubbleId,
                isCapabilityIteration: !1,
                contextUsed: m,
                isCacheWarming: !0,
              },
              { request: We },
            )
          } catch {
            return
          }
          const xe = await v.warmComposerCache(We, { signal: x.signal })
          C && this._composerUtilsService.abortGenerationUUID(C)
        } catch {
        } finally {
        }
    }
    async debouncedMaybeKeepComposerCacheWarm(e, t, s) {
      await this._aiFeatureStatusService
        .maybeRefreshConfig("keepCacheWarmTimeout")
        .catch(() => {})
      const n =
        this._aiFeatureStatusService.getCachedConfig("keepCacheWarmTimeout") ??
        4.5 * 60 * 1e3
      let r
      const o = this.D(
        this._composerEventService.onDidSendRequest(() => {
          r !== void 0 && clearTimeout(r), o.dispose()
        }),
      )
      r = setTimeout(async () => {
        if ((o.dispose(), this._composerDataService.selectedComposerId !== e))
          return
        ;(await this._aiService.aiClient())
          .keepComposerCacheWarm({
            request: s,
            requestId: t,
            isComposerVisible: this._composerViewsService.isShowing(e),
          })
          .catch((c) => {})
      }, n)
    }
    resumeChat(e, t) {
      const s = this._composerDataService.getComposerData(e)
      if (!s) return
      const n = s.conversation.at(-1)
      !n ||
        n.type !== bn.AI ||
        this.submitChatMaybeAbortCurrent(e, "", {
          ...(t ?? { isChat: n.isChat }),
          isResume: !0,
          bubbleId: void 0,
        })
    }
    shouldSkipCapabilities(e, t) {
      return e === "*" || (e ?? []).includes(t)
    }
    isActiveGeneration(e) {
      return this._aiService.streamingAbortControllers.has(e)
    }
    async updateComposerSummaryIfOutdated(e) {
      const t = await this._composerDataService.getComposerHandleById(e)
      try {
        if (!t) return
        const s = t.data.conversation.at(-1)?.bubbleId
        if (
          !s ||
          !this._selectedContextService.shouldUpdateConversationSummary(t.data)
        )
          return
        try {
          const n = await this._chatClient.get(),
            r = await this._repositoryService.getNewRepoInfo(),
            o =
              r && this._repositoryService.isIndexedMainLocalRepository()
                ? new Sl(r)
                : void 0,
            a = this._composerModesService.getComposerUnifiedMode(e),
            l = [...t.data.conversation]
              .reverse()
              .map((v) => v.conversationSummary)
              .filter((v) => v !== void 0)[0],
            c = l?.clientShouldStartSendingFromInclusiveBubbleId
          let u = c
            ? t.data.conversation.findIndex(
                (v) => (v.serverBubbleId ?? v.bubbleId) === c,
              )
            : 0
          u === -1 && (u = 0)
          const h = t.data.conversation.slice(u),
            d = await this.populateCodeChunksInConversation(e, h, a === "chat"),
            g =
              await this._composerUtilsService.populateConversationWithExtraContext(
                d,
                e,
              ),
            p = this.getModelDetails(a),
            m = await n.getConversationSummary({
              conversation: g,
              fullConversationHeadersOnly: t.data.conversation.map((v) => ({
                bubbleId: v.bubbleId,
                serverBubbleId: v.serverBubbleId,
                type: v.type,
              })),
              conversationSummary: l,
              conversationId: e,
              repositoryInfo: o,
              isAgentic: this._composerDataService.getComposerIsAgentic(e),
              modelDetails: p,
            })
          this._composerDataService.updateComposerDataSetStore(e, (v) =>
            v("latestConversationSummary", { summary: m, lastBubbleId: s }),
          )
        } catch (n) {
          console.error("[composer] Error getting conversation summary:", n)
        }
      } finally {
        t?.dispose()
      }
    }
    handleAbortChat(e, t) {
      const s = this._composerDataService.getComposerData(e)
      if (!s || this._skipHandleAbortChat.has(e)) return
      const n = this._composerDataService.getComposerBubble(e, t),
        r = s.conversation.findIndex((c) => c.bubbleId === t)
      if (!n || t !== this._composerDataService.getLastHumanBubbleId(e)) return
      const o = s.conversation
        .slice(r + 1)
        .filter((c) => c.type === bn.AI)
        .map((c) => this._composerDataService.getComposerBubble(e, c.bubbleId))
        .filter(mr)
      if (
        o.some((c) =>
          (c.codeBlocks ?? [])
            .filter((h) => !h.unregistered)
            .map((h) =>
              this._composerDataService.getComposerCodeBlock(
                e,
                h.uri,
                h.version,
              ),
            )
            .filter(mr)
            .some((h) => h.status !== "generating" && h.status !== "aborted"),
        )
      )
        return
      if (o.every((c) => c.text.length === 0 && c.errorDetails === void 0)) {
        this._composerDataService.updateComposerDataSetStore(e, (d) =>
          d("conversation", (g) => g.slice(0, r)),
        )
        const c = z_(n.context || yw()),
          u = n.text,
          h = n.richText
        this._composerDataService.updateComposerData(e, {
          text: u,
          richText: h,
          context: c,
        }),
          this._composerEventService.fireShouldForceText({ composerId: e }),
          this._composerViewsService.focus(e, !0)
      } else
        s.text.length === 0 &&
          !n.isCapabilityIteration &&
          this._composerDataService.getLastHumanBubbleId(e) === t &&
          (this._composerDataService.updateComposerDataSetStore(e, (c) =>
            c("editingBubbleId", t),
          ),
          this._composerViewsService.focusPrevBubble(e))
    }
    isUsingAPIKeys() {
      const t = (
        this._reactiveStorageService.applicationUserPersistentStorage.aiSettings
          .composerModel ?? "claude-3.5-sonnet"
      ).toLowerCase()
      let s
      switch (!0) {
        case t === "default" || t.includes("cursor"):
          s = !1
          break
        case t.includes("gpt") || t.includes("o1") || t.includes("o3"):
          s =
            this._reactiveStorageService.applicationUserPersistentStorage
              .useOpenAIKey ?? !1
          break
        case t.includes("claude"):
          s =
            this._reactiveStorageService.applicationUserPersistentStorage
              .useClaudeKey ?? !1
          break
        case t.includes("gemini"):
          s =
            this._reactiveStorageService.applicationUserPersistentStorage
              .useGoogleKey ?? !1
          break
        default:
          s = !0
      }
      return s
    }
    getModelDetails(e) {
      return this._aiService.getModelDetails({ composerModeId: e })
    }
    async getEnvironmentInfo() {
      const e =
        await this._everythingProviderService.onlyLocalProvider?.runCommand(
          nAt.GetExtHostInfo,
          null,
        )
      return {
        exthostPlatform: e?.platform,
        exthostArch: e?.arch,
        exthostRelease: e?.release,
        exthostShell: e?.shell,
        localTimestamp: new Date().toISOString(),
        workspaceUris: this._workspaceContextService
          .getWorkspace()
          .folders.map((t) => t.uri.toString()),
      }
    }
    shouldRenameComposer(e) {
      const t = e.conversation.filter((s) => s.type === bn.AI).length
      return t >= 1 && (!e.name || t === 1)
    }
    async renameComposer(e) {
      const t = this._composerDataService.getComposerData(e)
      if (!(!t || !this.shouldRenameComposer(t)))
        try {
          const n = await (
            await this._aiService.aiClient()
          ).nameTab({ messages: t.conversation })
          if (n.name)
            await this._composerDataService.updateComposerDataAsync(e, (r) =>
              r("name", n.name),
            )
          else {
            const r = t.conversation[0]
            r &&
              r.type === bn.HUMAN &&
              (await this._composerDataService.updateComposerDataAsync(e, (o) =>
                o(
                  "name",
                  r.text
                    .trim()
                    .split(
                      `
`,
                    )[0]
                    .split(" ")
                    .slice(0, 10)
                    .join(" ") ?? "",
                ),
              ))
          }
        } catch (s) {
          console.error("Error renaming composer", s)
        }
    }
    getUnifiedMode(e) {
      switch (e) {
        case "chat":
          return FO.CHAT
        case "edit":
          return FO.EDIT
        case "agent":
          return FO.AGENT
        default:
          return FO.CUSTOM
      }
    }
    getThinkingLevel(e) {
      switch (e) {
        case "high":
          return tH.HIGH
        case "medium":
          return tH.MEDIUM
        default:
          return tH.UNSPECIFIED
      }
    }
    async populateCodeChunksInConversation(e, t, s = !1) {
      const n = new Map()
      t.forEach((o, a) => {
        if (o.type !== bn.HUMAN || !o.context) return
        const { fileSelections: l } = o.context
        for (const c of l || [])
          try {
            const u = CR(c)
            n.set(u, a)
          } catch (u) {
            console.error(`Error processing file selection: ${u}`)
          }
      })
      const r = [...t].reverse().find((o) => o.type === bn.HUMAN)?.bubbleId
      return await Promise.all(
        t.map(async (o, a) => {
          if (o.type !== bn.HUMAN || !o.context || o.bubbleId === r) return o
          const { fileSelections: l, selections: c } = o.context
          let u = []
          const h = o.checkpoint ?? Jit(),
            {
              filesToRevert: d,
              intermediateFiles: g,
              foldersToDelete: p,
            } = this._composerCheckpointService.getFilesToRevertForCheckpoint(
              e,
              o.bubbleId,
              r,
              h,
            )
          for (const m of l || [])
            try {
              const v = CR(m),
                y = async () =>
                  await this._selectedContextService.getCodeChunksFromFileSelections(
                    [m],
                    { context: o.context },
                  )
              if (
                [...p].some((w) => v.startsWith(w)) ||
                h.nonExistentFiles.some((w) => w.uri.toString() === v)
              ) {
                u.push(...(await y()))
                continue
              }
              if (d.has(v)) {
                let w
                if (h.files.some((C) => C.uri.toString() === v))
                  w = h.files.find((C) => C.uri.toString() === v)
                else {
                  const C = g.get(v)
                  C &&
                    (w = C.checkpoint.files.find((S) => S.uri.toString() === v))
                }
                if (w)
                  if (w.isNewlyCreated) u.push(...(await y()))
                  else {
                    const C =
                        this._composerUtilsService.getCodeBlockLinesByDiff(
                          e,
                          H.parse(v),
                          w.originalModelDiffWrtV0 ?? [],
                        ) ?? [],
                      S =
                        await this._selectedContextService.getCodeChunksFromFileContent(
                          H.parse(v),
                          C,
                          { context: o.context },
                        )
                    S && u.push(S)
                  }
                else u.push(...(await y()))
              } else u.push(...(await y()))
            } catch (v) {
              console.error(`Error processing file selection: ${v}`)
            }
          for (const m of c || [])
            try {
              const v =
                await this._selectedContextService.getCodeChunksFromCodeSelection(
                  m,
                )
              v && u.push(v)
            } catch (v) {
              console.error(`Error processing code selection: ${v}`)
            }
          return { ...o, attachedCodeChunks: u }
        }),
      )
    }
  }

  return {
    nz,
    rz,
  };
}
