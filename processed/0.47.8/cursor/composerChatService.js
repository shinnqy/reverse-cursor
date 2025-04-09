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
        (this._recentlyResumed = false),
        (this._skipHandleAbortChat = new Set()),
        (this._chatClient = this._instantiationService.createInstance(_d, {
          service: Tat,
        }))
    }
    async submitChatMaybeAbortCurrent(composerId, currentText, options) {
      const n = Date.now()
      try {
        await this._composerUtilsService.ensureCapabilitiesAreLoaded(composerId)
      } catch (k) {
        console.error("[composer] error ensuring capabilities are loaded", k)
        return
      }
      this._reactiveStorageService.setNonPersistentStorage(
        "showReportFeedbackModal",
        undefined,
      )
      const mode = this._composerModesService.getComposerUnifiedMode(composerId),
        thinkingLevel = this._composerModesService.getModeThinkingLevel(mode),
        modelDetails = this.getModelDetails(mode)
      options?.modelOverride && (modelDetails.modelName = options.modelOverride)
      const isChat = (mode === "chat" || options?.isChat) ?? false
      let isAgentic =
        modelDetails.modelName === undefined ||
        this._aiSettingsService.doesModelSupportAgent(modelDetails.modelName)
      options = {
        capabilityProcessesToSkip: isChat
          ? [
              "start-submit-chat",
              "before-submit-chat",
              "after-submit-chat",
              "composer-settled",
            ]
          : options?.capabilityProcessesToSkip,
        ...(options ?? {}),
      }
      const composerState = this._composerDataService.getComposerFromIdOrHandle(composerId)
      if (!composerState) {
        console.error("[composer] submitted without state!")
        return
      }
      if (
        !this.shouldSkipCapabilities(
          options?.capabilityProcessesToSkip,
          "start-submit-chat",
        )
      )
        try {
          if (
            await this._composerUtilsService.runCapabilitiesForProcess(
              composerId,
              "start-submit-chat",
              {
                composerId: composerId,
                isCapabilityIteration: options?.isCapabilityIteration,
                submitChatProps: { text: currentText, extra: options },
              },
            )
          )
            return
        } catch (error) {
          console.error(
            "[composer] error running capabilities for start-submit-chat",
            error,
          ),
            this._composerDataService.updateComposerDataSetStore(composerId, (E) =>
              E("status", "aborted"),
            )
          return
        }
      let abortController = new AbortController(),
        hasError = false,
        isComplete = false,
        hasResponse = false,
        generationUUID = Mt(),
        humanBubble,
        aiBubble,
        contextUsed = yw()
      const retrySubmit = () => {
          humanBubble &&
            this.submitChatMaybeAbortCurrent(composerId, currentText, {
              ...options,
              bubbleId: humanBubble.bubbleId,
            })
        },
        handleError = (error) => {
          const shouldShowError = this._aiErrorService.shouldShowImmediateErrorMessage(error),
            composer = this._composerDataService.getComposerFromIdOrHandle(composerId),
            lastAiBubbleId = this._composerDataService.getLastAiBubbleId(composerId),
            canResume =
              isAgentic &&
              this._composerDataService
                .getLastAiBubbles(composerId)
                .some((N) => (N.text.length ?? 0) > 0) &&
              !options?.isResume
          if (shouldShowError && composer) {
            const N = vD(error)
            this._composerDataService.updateComposerDataSetStore(composerId, (R) =>
              R("conversation", (B) => B.bubbleId === lastAiBubbleId, "errorDetails", {
                generationUUID: generationUUID,
                error: N,
                message: error?.rawMessage,
                rerun: options?.isResume ? () => this.resumeChat(composerId, options) : retrySubmit,
                resume: canResume
                  ? () => {
                      this.resumeChat(composerId, options)
                    }
                  : undefined,
              }),
            )
          }
        }
      try {
        let timingFunction = function (jt, $s) {
          const Ss = Date.now()
          return jt.finally(() => {
            const vt = Date.now()
            console.log(`[composer.submitChat] ${$s} took ${vt - Ss}ms`)
          })
        }
        var x = timingFunction
        this._composerDataService.updateComposerDataSetStore(composerId, (jt) =>
          jt("status", "generating"),
        ),
          this._composerDataService.updateComposerDataSetStore(composerId, (jt) =>
            jt("editingBubbleId", undefined),
          ),
          this._composerUtilsService.clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages(
            composerId,
          )
        const getModelChanges = async () => {
            const jt = await this._composerDataService
              .getModelDiffStateManager()
              .renderChanges()
            return (
              this._composerDataService.getModelDiffStateManager().reset(), jt
            )
          },
          humanChanges = await this._selectedContextService.getHumanChanges(getModelChanges()),
          capabilities = fDs(composerState.capabilities)
        if (capabilities.length === 0 && options?.isCapabilityIteration) {
          console.error(
            "[composer] submitted capability iteration without capabilities!",
          )
          return
        }
        this._composerDataService.clearActionButtons(composerId)
        const isResume = !options?.isResume
        options.bubbleId = options?.bubbleId ?? composerState.currentBubbleId
        let checkpointCallback
        options?.shouldCheckout &&
          options?.bubbleId &&
          (checkpointCallback = await this._composerCheckpointService.createCheckoutCallback(
            composerId,
            options.bubbleId,
            { skipDialog: true, fromSubmitChat: true },
          ))
        let isHumanBubble = false
        if (options?.bubbleId) {
          const bubbleId = options.bubbleId ?? composerState.currentBubbleId,
            bubble = this._composerDataService.getComposerBubble(composerId, bubbleId),
            bubbleIndex = composerState.conversation.findIndex((Js) => Js.bubbleId === bubbleId)
          if (!bubble) throw Error("[composer] current bubble is undefined")
          let nextBubbleId
          bubble.type === bn.HUMAN
            ? ((nextBubbleId = bubbleIndex !== -1 ? composerState.conversation[bubbleIndex + 1]?.bubbleId : undefined),
              (isHumanBubble = true))
            : (nextBubbleId = bubbleId)
          const subsequentBubbles = composerState.conversation.slice(bubbleIndex + 1),
            previousBubbles = composerState.conversation.slice(0, bubbleIndex),
            isTerminalCommand = (Js) => {
              const Cr = this._composerDataService.getComposerCapability(
                composerId,
                xn.TOOL_FORMER,
              )
              if (!Cr) return false
              const ma = Cr.getBubbleData(Js.bubbleId)
              return ma ? ma.tool === Et.RUN_TERMINAL_COMMAND_V2 : false
            },
            hasSubsequentTerminalCommand = subsequentBubbles.some(isTerminalCommand),
            hasPreviousTerminalCommand = previousBubbles.some(isTerminalCommand)
          if (hasSubsequentTerminalCommand) {
            const toolFormerCapability = capabilities.find((Cr) => Cr.type === xn.TOOL_FORMER)
            toolFormerCapability && toolFormerCapability.clearSessionId()
          }
          nextBubbleId && this._composerUtilsService.removeMessagesAfterBubble(composerId, nextBubbleId),
            isHumanBubble
              ? (this._composerDataService.updateComposerBubble(composerId, bubbleId, {
                  ...yD(),
                  bubbleId: bubbleId,
                  richText: options?.richText ?? currentText,
                  text: currentText,
                  isCapabilityIteration: options?.isCapabilityIteration,
                  existedSubsequentTerminalCommand: hasSubsequentTerminalCommand,
                  existedPreviousTerminalCommand: hasPreviousTerminalCommand,
                  humanChanges: humanChanges,
                  attachedHumanChanges: composerState.context.useRecentChanges,
                  skipRendering: false,
                }),
                console.log(
                  `[composer.submitChat] Time between function start and adding human message: ${Date.now() - n}ms`,
                ))
              : this._composerDataService.updateComposerBubble(composerId, bubbleId, {
                  existedSubsequentTerminalCommand: hasSubsequentTerminalCommand,
                  existedPreviousTerminalCommand: hasPreviousTerminalCommand,
                  humanChanges: humanChanges,
                  attachedHumanChanges: composerState.context.useRecentChanges,
                })
        }
        if (options?.isResume || isHumanBubble) {
          const lastHumanBubble = this._composerDataService.getLastHumanBubble(composerId)
          if (!lastHumanBubble)
            throw new Error(
              "[composer] submitted capability iteration without a last human message!",
            )
          humanBubble = lastHumanBubble
        } else
          (humanBubble = {
            ...yD(),
            richText: options?.richText ?? currentText,
            text: currentText,
            isCapabilityIteration: options?.isCapabilityIteration,
            tokenDetailsUpUntilHere: composerState.tokenDetails,
            tokenCountUpUntilHere: composerState.tokenCount,
          }),
            this._composerDataService.updateComposerDataSetStore(composerId, (jt) =>
              jt("conversation", [...composerState.conversation, humanBubble]),
            ),
            console.log(
              `[composer.submitChat] Time between function start and adding human message: ${Date.now() - n}ms`,
            )
        checkpointCallback && (await checkpointCallback())
        let context = z_(composerState.context)
        if (
          (options?.isCapabilityIteration ||
            (isResume && this._composerUtilsService.clearText(composerId),
            this._composerViewsService.focus(composerId, true)),
          options?.bubbleId !== undefined)
        ) {
          const bubble = this._composerDataService.getComposerBubble(composerId, options.bubbleId)
          if (bubble && bubble.context) {
            const bubbleContext = bubble.context
            context = z_(bubbleContext)
            const updatedContext = mvs(z_(bubbleContext))
            this._composerDataService.updateComposerDataSetStore(composerId, (vt) =>
              vt("context", updatedContext),
            )
          }
        }
        this._composerDataService.updateComposerDataSetStore(composerId, (jt) =>
          jt("currentBubbleId", undefined),
        ),
          this._composerDataService.updateComposerDataSetStore(composerId, (jt) =>
            jt("latestCheckpoint", undefined),
          )
        const updatedContext = {
          ...context,
          usesCodebase:
            context.usesCodebase !== undefined && context.usesCodebase !== false
              ? context
              : options?.usesCodebase,
          useDiffReview: context.useDiffReview ?? options?.useDiffReview,
        }
        if (
          !options?.isCapabilityIteration &&
          !options?.isResume &&
          (this._composerContextService.removeNonPersistentContext(composerId), isChat)
        ) {
          this._composerContextService.removeAllListContext({
            composerId: composerId,
            contextType: "fileSelections",
            addToUndoRedo: false,
          })
          const currentFile = this._composerUtilsService.getCurrentFile()
          currentFile !== undefined &&
            context.fileSelections.some(
              ($s) => vv("fileSelections", $s) === vv("fileSelections", currentFile),
            ) &&
            this._composerContextService.resetContext(composerId)
        }
        if (!options?.isResume) {
          const checkpoint =
            await this._composerCheckpointService.createCurrentCheckpoint(composerId)
          this._composerDataService.updateComposerBubble(composerId, humanBubble.bubbleId, {
            checkpoint: checkpoint,
            context: updatedContext,
          })
        }
        console.log(
          `[composer.submitChat] Time between function start and handling context / checkpoints: ${Date.now() - n}ms`,
        )
        const aiClient = await this._aiService.aiClient()
        let linterErrors
        const fileSelections = updatedContext.fileSelections.map((jt) => CR(jt)),
          codeblockUris = isChat
            ? []
            : this._composerDataService
                .getUrisOfCodeblocksInLastAiBubbles(composerState.composerId)
                .map((jt) => jt.toString()),
          validFiles = (
            await Promise.all(
              (
                await Promise.all(
                  Array.from(new Set([...fileSelections, ...codeblockUris])).map(async (uri) => ({
                    uri: uri,
                    exists: await this._fileService.exists(H.parse(uri)),
                  })),
                )
              )
                .filter((jt) => jt.exists)
                .map((jt) => jt.uri),
            )
          ).map((jt) => ({ uri: H.parse(jt), fileName: hn(jt) }))
        if (
          ((contextUsed = { ...updatedContext, fileSelections: validFiles }),
          (isAgentic || contextUsed.usesCodebase) &&
            this._reactiveStorageService.applicationUserPersistentStorage
              .checklistState?.doneCommandEnter !== true)
        ) {
          const checklistState =
            this._reactiveStorageService.applicationUserPersistentStorage
              .checklistState
          this._reactiveStorageService.setApplicationUserPersistentStorage(
            "checklistState",
            ($s) => ({ ...($s ?? {}), doneCommandEnter: true }),
          )
        }
        if (
          !this.shouldSkipCapabilities(
            options?.capabilityProcessesToSkip,
            "before-submit-chat",
          )
        )
          try {
            if (
              await this._composerUtilsService.runCapabilitiesForProcess(
                composerId,
                "before-submit-chat",
                {
                  composerId: composerId,
                  humanBubbleId: humanBubble.bubbleId,
                  isCapabilityIteration: options?.isCapabilityIteration,
                  contextUsed: contextUsed,
                  submitChatProps: { text: currentText, extra: options },
                },
              )
            )
              return
          } catch (error) {
            console.error(
              "[composer] error running capabilities for before-submit-chat",
              error,
            )
            return
          }
        if (composerState.chatGenerationUUID) {
          const chatGenerationUUID = composerState.chatGenerationUUID
          this._composerDataService.updateComposerDataSetStore(composerId, ($s) =>
            $s("chatGenerationUUID", undefined),
          ),
            this._skipHandleAbortChat.add(composerId),
            this._composerUtilsService.abortGenerationUUID(chatGenerationUUID),
            await new Promise(($s) => setTimeout($s, 50)),
            this._skipHandleAbortChat.delete(composerId)
        }
        ;(abortController = this._aiService.registerNewGeneration({
          generationUUID: generationUUID,
          metadata: isChat
            ? {
                type: "chat",
                tabId: composerState.composerId,
                bubbleId: humanBubble.bubbleId,
                chatType: "chat",
              }
            : { type: "composer", textDescription: currentText },
        })[1]),
          this._composerDataService.updateComposerData(composerId, {
            chatGenerationUUID: generationUUID,
            latestChatGenerationUUID: generationUUID,
            generatingBubbleIds: [],
            status: "generating",
            lastUpdatedAt: Date.now(),
          })
        const lastBubble = composerState.conversation.at(-1),
          isResumingAiBubble =
            options?.isResume && lastBubble?.type === bn.AI && lastBubble?.capabilityType === undefined
        if (isResumingAiBubble) {
          if (!lastBubble)
            throw new Error(
              "[composer] submitted capability iteration without a last ai message!",
            )
          aiBubble = lastBubble
        } else
          aiBubble = {
            ...yD(),
            codeBlocks: [],
            type: bn.AI,
            text: "",
            isCapabilityIteration: options?.isCapabilityIteration,
            isChat: isChat,
            timingInfo: { clientStartTime: n, clientRpcSendTime: Date.now() },
          }
        const isUsingAPIKeys = this.isUsingAPIKeys(),
          membershipType = this._cursorAuthenticationService.membershipType()
        if (
          isUsingAPIKeys &&
          !isChat &&
          membershipType === Vr.FREE &&
          this._cursorAuthenticationService.isAuthenticated()
        ) {
          console.log({
            isUsingApiKey: isUsingAPIKeys,
            isChat: isChat,
            membershipType: membershipType,
            isAuthenticated:
              this._cursorAuthenticationService.isAuthenticated(),
          })
          const abortState = { status: "aborted" }
          isResumingAiBubble || (abortState.conversation = [...composerState.conversation, aiBubble]),
            this._composerDataService.updateComposerData(composerId, abortState),
            this._composerDataService.updateComposerDataSetStore(composerId, ($s) =>
              $s(
                "conversation",
                (Ss) => Ss.bubbleId === aiBubble.bubbleId,
                "errorDetails",
                {
                  generationUUID: generationUUID,
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
                  rerun: retrySubmit,
                },
              ),
            )
          return
        }
        const qe = Date.now(),
          fileUris = validFiles.map((jt) => jt.uri)
        let shouldGetLinterErrors = !isChat || (contextUsed.useLinterErrors && isAgentic)
        const linterErrorsPromise = timingFunction(
            shouldGetLinterErrors
              ? this._selectedContextService.getLinterErrorsForFiles(fileUris)
              : Promise.resolve([]),
            "getPerMessageLinterErrors",
          ),
          codeChunksPromise = timingFunction(
            this._selectedContextService.getCodeChunks({
              ...contextUsed,
              folderSelections: isAgentic ? [] : contextUsed.folderSelections,
            }),
            "getCodeChunks",
          ),
          relevantFilesPromise = timingFunction(
            this._composerDataService.getRelevantFiles(composerId),
            "getRelevantFiles",
          ),
          environmentInfoPromise = timingFunction(this.getEnvironmentInfo(), "getEnvironmentInfo"),
          recentlyViewedFilesPromise = timingFunction(
            isChat
              ? Promise.resolve({
                  recentlyViewedFiles: [],
                  recentLocationsHistory: [],
                })
              : this._composerUtilsService.getRecentlyViewedFileInfo(codeChunksPromise),
            "getRecentlyViewedFileInfo",
          ),
          [linterErrorsResult, codeChunksResult, relevantFilesResult, environmentInfoResult] = await Promise.all([linterErrorsPromise, codeChunksPromise, relevantFilesPromise, environmentInfoPromise])
        console.log(
          `[composer.submitChat] Time taken to process context: ${Date.now() - qe}ms`,
        ),
          (linterErrors = linterErrorsResult),
          fetch('http://localhost:3000', {
            method: 'POST',
            body: JSON.stringify({
              updateComposerDataSetStore: 'updateComposerDataSetStore',
              item: {
                linterErrorsResult,
                codeChunksResult,
                relevantFilesResult,
                environmentInfoResult,
              }
            }),
          });
          this._composerDataService.updateComposerDataSetStore(composerId, (state) =>
            state("conversation", ($s) => $s.bubbleId === humanBubble.bubbleId, {
              relevantFiles: [
                ...relevantFilesResult.map(($s) =>
                  this._workspaceContextService.asRelativePath(
                    H.revive($s.uri),
                  ),
                ),
              ],
              multiFileLinterErrors: [
                ...linterErrors.map(($s) => new Tp({ ...$s, fileContents: undefined })),
              ],
              humanChanges: humanChanges,
              attachedHumanChanges: updatedContext.useRecentChanges,
              isAgentic: isAgentic,
              unifiedMode: this.getUnifiedMode(mode),
            }),
          )
        const conversationCopy = Af(composerState.conversation).map((jt) => ({ ...jt })),
          humanBubbleIndex = conversationCopy.findIndex((jt) => jt.bubbleId === humanBubble.bubbleId)
        conversationCopy[humanBubbleIndex].attachedCodeChunks = codeChunksResult
        const lastConversationSummary = [...conversationCopy]
            .reverse()
            .map((jt) => jt.conversationSummary)
            .filter((jt) => jt !== undefined)[0],
          startSendingFromBubbleId = lastConversationSummary?.clientShouldStartSendingFromInclusiveBubbleId
        let startIndex = startSendingFromBubbleId
          ? conversationCopy.findIndex((jt) => (jt.serverBubbleId ?? jt.bubbleId) === startSendingFromBubbleId)
          : 0
        startIndex === -1 && (startIndex = 0)
        const conversationSlice = conversationCopy.slice(startIndex),
          populatedConversation = await this.populateCodeChunksInConversation(composerId, conversationSlice)
        let finalConversation = populatedConversation
        isChat ||
          (finalConversation =
            await this._composerUtilsService.populateRedDiffsInConversation(populatedConversation))
        for (const bubble of finalConversation)
          this._composerDataService.updateComposerDataSetStore(composerId, ($s) =>
            $s(
              "conversation",
              (Ss) => Ss.bubbleId === bubble.bubbleId,
              "diffsForCompressingFiles",
              bubble.diffsForCompressingFiles,
            ),
          )
        let responseText = ""
        const Rt = Date.now(),
          conversationWithExtraContext =
            await this._composerUtilsService.populateConversationWithExtraContext(
              finalConversation,
              composerId,
              {
                lastBubbleContext: contextUsed,
                removeContext: (jt) =>
                  this._composerContextService.removeContext({
                    ...jt,
                    composerIdOrHandle: composerId,
                  }),
              },
            )
        console.log(
          `[composer] Time taken to process extra context: ${Date.now() - Rt}ms`,
        ),
          await (async () => {
            if (abortController.signal.aborted) return
            const jt = Date.now()
            try {
              const conversation = conversationWithExtraContext
              let currentFileInfo = await this._aiService.getCurrentFileInfo()
              const repoInfo = await this._repositoryService.getNewRepoInfo()
              let repositoryInfo
              repoInfo &&
                this._repositoryService.isIndexedMainLocalRepository() &&
                (repositoryInfo = new Sl(repoInfo))
              const availableTools =
                  await this._toolsV2HandlerRegistryService.getAvailableTools(
                    composerState,
                    mode,
                  ),
                isMcpEnabled = this._composerModesService.getMode(mode)?.mcpEnabled ?? false,
                shouldDisableTools = !isAgentic
              let shouldForceNotApply
              availableTools.includes(Et.EDIT_FILE)
                ? (shouldForceNotApply = true)
                : (shouldForceNotApply =
                    !this._composerModesService.getModeShouldAutoApplyIfNoEditTool(
                      mode,
                    ))
              const shouldUseChatPrompt = this._composerModesService.isModeChatLike(mode),
                isClaudeModel = modelDetails.modelName === "claude-3.7-sonnet-thinking-max",
                chatRequest = {
                  conversation: conversation,
                  fullConversationHeadersOnly: conversation.map((ql) => ({
                    bubbleId: ql.bubbleId,
                    type: ql.type,
                    serverBubbleId: ql.serverBubbleId,
                  })),
                  conversationSummary: lastConversationSummary,
                  allowLongFileScan: true,
                  explicitContext: await this._aiService.getExplicitContext(mode),
                  documentationIdentifiers: (contextUsed.selectedDocs ?? []).map(
                    (ql) => ql.docId,
                  ),
                  quotes: contextUsed.quotes ?? [],
                  canHandleFilenamesAfterLanguageIds: true,
                  modelDetails: modelDetails,
                  multiFileLinterErrors: [],
                  useWeb: contextUsed.useWeb ? "full_search" : undefined,
                  externalLinks: contextUsed.externalLinks ?? [],
                  diffsForCompressingFiles: [],
                  shouldCache:
                    this._reactiveStorageService
                      .applicationUserPersistentStorage.cacheComposerPrompts,
                  currentFile: currentFileInfo,
                  fileDiffHistories: [],
                  useNewCompressionScheme: true,
                  additionalRankedContext: [],
                  isChat: false,
                  conversationId: composerState.composerId,
                  repositoryInfo: repositoryInfo,
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
                  isHeadless: false,
                  environmentInfo: environmentInfoResult,
                  isAgentic: isAgentic,
                  linterErrors:
                    isChat && contextUsed.useLinterErrors && !isAgentic
                      ? await qbs(
                          this._markerService,
                          this._workspaceContextService,
                          this._aiService,
                        )
                      : undefined,
                  supportedTools: availableTools,
                  enableYoloMode:
                    this._composerModesService.getModeAutoRun(mode) ?? false,
                  yoloPrompt:
                    this._reactiveStorageService
                      .applicationUserPersistentStorage.composerState
                      .yoloPrompt ?? "",
                  useUnifiedChatPrompt: false,
                  mcpTools: isMcpEnabled
                    ? await this._mcpService.getToolsForComposer()
                    : [],
                  useFullInputsContext:
                    !isClaudeModel &&
                    !this._reactiveStorageService
                      .applicationUserPersistentStorage.fullContextOptions
                      .compress,
                  toolsRequiringAcceptedReturn: fvs,
                  isResume: options?.isResume,
                  allowModelFallbacks:
                    this._reactiveStorageService
                      .applicationUserPersistentStorage.allowModelFallbacks,
                  numberOfTimesShownFallbackModelWarning:
                    this._reactiveStorageService
                      .applicationUserPersistentStorage
                      .numberOfTimesShownFallbackModelWarning ?? 0,
                  unifiedMode: this.getUnifiedMode(mode),
                  shouldDisableTools: shouldDisableTools,
                  thinkingLevel: this.getThinkingLevel(thinkingLevel),
                  shouldUseChatPrompt: shouldUseChatPrompt,
                  usesRules: await this._cursorRulesService
                    .getRules({ requireDescription: true })
                    .then((ql) => ql.length > 0),
                }
                fetch('http://localhost:3000', {
                  method: 'POST',
                  body: JSON.stringify({
                    chatRequest,
                    generationUUID
                  }),
                });
              console.log("[composer] composerChatRequest", chatRequest)
              let capabilityError
              if (
                !this.shouldSkipCapabilities(
                  options?.capabilityProcessesToSkip,
                  "mutate-request",
                )
              )
                try {
                  await this._composerUtilsService.runCapabilitiesForProcess(
                    composerId,
                    "mutate-request",
                    {
                      composerId: composerId,
                      humanBubbleId: humanBubble.bubbleId,
                      isCapabilityIteration: options?.isCapabilityIteration,
                      contextUsed: contextUsed,
                    },
                    { request: chatRequest },
                  )
                } catch (error) {
                  if (error instanceof Ag) capabilityError = error
                  else {
                    console.error(
                      "[composer] error running capabilities for mutate-request",
                      error,
                    )
                    return
                  }
                }
              if (
                ((aiBubble.capabilitiesRan =
                  this._composerDataService.getComposerBubble(
                    composerId,
                    humanBubble.bubbleId,
                  )?.capabilitiesRan),
                abortController.signal.aborted)
              )
                return
              const chatClient = await this._chatClient.get(),
                chatRequestWrapper = new Rue(chatRequest)
              chatRequest.usesCodebaseResults &&
                (chatRequestWrapper.usesCodebaseResults = new PNt({
                  results: chatRequest.usesCodebaseResults.results,
                  allFiles: chatRequest.usesCodebaseResults.allFiles,
                }))
              let responseStream
              if (capabilityError !== undefined)
                responseStream = (async function* () {
                  throw capabilityError
                })()
              else {
                const streamRequest = new djt(undefined)
                streamRequest.push(
                  new $O({
                    request: { case: "streamUnifiedChatRequest", value: chatRequest },
                  }),
                )
                const streamResponse = chatClient.streamUnifiedChatWithTools(streamRequest, {
                  signal: abortController.signal,
                  headers: Zo(generationUUID),
                })
                responseStream = this._toolV2Service.toolWrappedStream(streamRequest, streamResponse, abortController, {
                  composerId: composerId,
                })
              }
              const updateState = {
                generatingBubbleIds: [
                  ...(composerState.generatingBubbleIds ?? []),
                  aiBubble.bubbleId,
                ],
                status: "generating",
              }
              isResumingAiBubble || (updateState.conversation = [...composerState.conversation, aiBubble]),
                this._composerDataService.updateComposerData(composerId, updateState)
              let streamer = Fx(responseStream)
              const streamHandler = this._composerUtilsService.handleStreamComposer({
                streamer: streamer,
                abortController: abortController,
                generationUUID: generationUUID,
                composerId: composerId,
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
                        composerId,
                        generationUUID,
                        new cX(chatRequest),
                      ))
                })().catch((ql) => {})
              const response = this._aiService.streamResponse({
                  modelDetails: modelDetails,
                  generationUUID: generationUUID,
                  streamer: streamHandler,
                  streamerURL:
                    xu.typeName + "/" + xu.methods.streamComposer.name,
                  source: "composer",
                  rethrowCancellation: true,
                  failSilently: false,
                }),
                processedResponse = await this._composerUtilsService.runCapabilitiesForProcess(
                  composerId,
                  "process-stream",
                  {
                    composerId: composerId,
                    humanBubbleId: humanBubble.bubbleId,
                    aiBubbleId: aiBubble.bubbleId,
                    stream: response,
                    generationUUID: generationUUID,
                    startTime: n,
                    submitChatProps: { text: currentText, extra: options },
                  },
                ),
                fakeStreamerId =
                  this._reactiveStorageService.applicationUserPersistentStorage
                    .composerState.selectedFakeStreamerId,
                fakeStreamer = fakeStreamerId ? sdr.find((ql) => ql.id === fakeStreamerId) : undefined,
                finalResponse = fakeStreamer ? Hhr(fakeStreamer)() : processedResponse,
                codeBlocks = this._composerApplyService.processCodeBlocks(composerId, finalResponse, {
                  skipOnSettled: this.shouldSkipCapabilities(
                    options?.capabilityProcessesToSkip,
                    "composer-settled",
                  ),
                  isCapabilityIteration: options?.isCapabilityIteration,
                  passTimingInfo: true,
                  forceIsNotApplied: shouldForceNotApply,
                })
              console.log(`[composer] Client-side ttft: ${Date.now() - n}ms`),
                console.log(
                  `[composer.submitChat] Last leg time taken: ${Date.now() - jt}ms`,
                )
              let currentBubbleId,
                currentBubbleText = aiBubble.text,
                isResuming = options?.isResume,
                resumeText = ""
              for await (const block of codeBlocks) {
                const bubbleId = this._composerDataService.getLastAiBubbleId(composerId)
                if (!bubbleId) throw new Error("[composer] No ai bubble id")
                if (
                  (currentBubbleId !== bubbleId &&
                    ((currentBubbleId = bubbleId),
                    (currentBubbleText =
                      this._composerDataService.getComposerBubble(composerId, bubbleId)
                        ?.text ?? "")),
                  (hasResponse = true),
                  block.timingInfo)
                ) {
                  aiBubble.timingInfo &&
                    this._composerDataService.updateComposerDataSetStore(
                      composerId,
                      (state) => {
                        state(
                          "conversation",
                          (qr) => qr.bubbleId === bubbleId,
                          "timingInfo",
                          (qr) => {
                            const Dn = block.timingInfo
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
                  const timeoutError = new Ag(
                    "Simulated timeout server error",
                    LC.DeadlineExceeded,
                    undefined,
                    [new YW({ error: no.TIMEOUT })],
                  )
                  throw (
                    (this._reactiveStorageService.setNonPersistentStorage(
                      "composerState",
                      "shouldSimulateTimeoutServerErrorOnce",
                      false,
                    ),
                    timeoutError)
                  )
                }
                const { text: text } = block
                if (!text) {
                  block.isBigFile &&
                    this._composerDataService.updateComposerDataSetStore(
                      composerId,
                      (vr) => vr("isReadingLongFile", true),
                    )
                  continue
                }
                composerState?.isReadingLongFile &&
                  this._composerDataService.updateComposerDataSetStore(
                    composerId,
                    (state) => state("isReadingLongFile", false),
                  )
                const updateText = (text) => {
                  ;(currentBubbleText += text),
                    (responseText += text),
                    this._composerDataService.updateComposerDataSetStore(
                      composerId,
                      (state) =>
                        state(
                          "conversation",
                          (bubble) => bubble.bubbleId === bubbleId,
                          "text",
                          currentBubbleText,
                        ),
                    )
                }
                if (isResuming) {
                  const combinedText = resumeText + text
                  if (currentBubbleText.includes(combinedText)) {
                    resumeText = combinedText
                    continue
                  } else if (resumeText !== "") {
                    const lastIndex = currentBubbleText.lastIndexOf(resumeText),
                      remainingText = currentBubbleText.slice(lastIndex + resumeText.length)
                    let newText = text
                    text.startsWith(remainingText)
                      ? (newText = text.slice(remainingText.length))
                      : (currentBubbleText = currentBubbleText.slice(0, lastIndex + resumeText.length)),
                      updateText(newText),
                      (isResuming = false)
                    continue
                  } else {
                    let matchedText = ""
                    for (let i = 0; i < currentBubbleText.length; i++) {
                      let partialText = currentBubbleText.slice(-i - 1)
                      if (text.startsWith(partialText)) matchedText = partialText
                      else break
                    }
                    updateText(text.slice(matchedText.length)), (isResuming = false)
                    continue
                  }
                  isResuming = false
                } else updateText(text)
              }
              ;(isComplete = true), (this._recentlyResumed = false)
            } catch (error) {
              if (
                (console.error("[composer] Error in AI response:", error),
                error instanceof Ag && !this._recentlyResumed)
              ) {
                const Ss = vD(error)
                if (Ss && Ss.error === no.TIMEOUT) {
                  ;(this._recentlyResumed = true), this.resumeChat(composerId, options)
                  return
                }
              }
              ;(this._recentlyResumed = false),
                (hasError = true),
                this._composerDataService.setGeneratingCodeBlocksToAborted(composerId),
                this._composerDataService.setGeneratingCapabilitiesToAborted(composerId),
                this._composerDataService.setGeneratingCapabilityCodeBlocksToAborted(
                  composerId,
                ),
                handleError(error)
            }
          })()
      } catch (error) {
        ;(hasError = true),
          console.error("[composer] submitChatMaybeAbortCurrent errored!", error)
      } finally {
        const isAborted = abortController.signal.aborted || composerState?.status === "aborted"
        humanBubble && isAborted && this.handleAbortChat(composerId, humanBubble.bubbleId),
          !hasResponse && !isAborted && handleError(new Ag("No response from model")),
          generationUUID && this._composerUtilsService.abortGenerationUUID(generationUUID)
        let lastAiBubbleId
        const aiBubbleIds = []
        if (aiBubble) {
          const aiBubbleIndex = composerState.conversation.findIndex((R) => R.bubbleId === aiBubble.bubbleId)
          for (let i = aiBubbleIndex; i > -1 && i < composerState.conversation.length; i++) {
            const bubble = composerState.conversation[i]
            if (bubble.type === bn.AI) aiBubbleIds.push(bubble.bubbleId), (lastAiBubbleId = bubble.bubbleId)
            else break
          }
        }
        const lastAiBubble = composerState.conversation.find(
          (bubble) => bubble.type === bn.AI && bubble.bubbleId === lastAiBubbleId,
        )
        lastAiBubble &&
          lastAiBubble.text === "" &&
          lastAiBubble?.capabilityType === undefined &&
          lastAiBubble.errorDetails === undefined &&
          lastAiBubble.serviceStatusUpdate === undefined &&
          this._composerDataService.updateComposerDataSetStore(composerId, (state) =>
            state("conversation", (bubbles) =>
              bubbles.filter((B) => B.bubbleId !== lastAiBubble.bubbleId),
            ),
          )
        const isActiveGeneration =
          composerState.chatGenerationUUID !== undefined &&
          this.isActiveGeneration(composerState.chatGenerationUUID)
        if (
          (this._composerDataService.updateComposerData(composerId, {
            generatingBubbleIds:
              composerState?.generatingBubbleIds?.filter((N) => !aiBubbleIds.includes(N)) ?? [],
            chatGenerationUUID: isActiveGeneration ? composerState.chatGenerationUUID : undefined,
          }),
          this._skipHandleAbortChat.has(composerId) ||
            (!isComplete || !hasResponse || hasError || composerState?.status === "aborted"
              ? (console.error("[composer] Failed to get complete AI response"),
                composerState?.conversation.length
                  ? this._composerDataService.updateComposerDataSetStore(
                      composerId,
                      (state) => state("status", "aborted"),
                    )
                  : this._composerDataService.updateComposerDataSetStore(
                      composerId,
                      (state) => state("status", "none"),
                    ))
              : this._composerDataService.updateComposerDataSetStore(composerId, (state) =>
                  state("status", "completed"),
                )),
          !this.shouldSkipCapabilities(
            options?.capabilityProcessesToSkip,
            "after-submit-chat",
          ) &&
            composerState.status !== "aborted" &&
            lastAiBubbleId &&
            humanBubble)
        )
          try {
            await this._composerUtilsService.runCapabilitiesForProcess(
              composerId,
              "after-submit-chat",
              {
                composerId: composerId,
                humanBubbleId: humanBubble.bubbleId,
                aiBubbleId: lastAiBubbleId,
                isCapabilityIteration: options?.isCapabilityIteration,
              },
            )
          } catch (error) {
            console.error(
              "[composer] error running capabilities for after-submit-chat",
              error,
            ),
              this._composerDataService.updateComposerDataSetStore(composerId, (state) =>
                state("status", "aborted"),
              )
          }
        if (
          (options?.onFinish?.(),
          this._reactiveStorageService.applicationUserPersistentStorage
            .checklistState?.doneCommandL !== true)
        ) {
          const checklistState =
            this._reactiveStorageService.applicationUserPersistentStorage
              .checklistState
          this._reactiveStorageService.setApplicationUserPersistentStorage(
            "checklistState",
            (state) => ({ ...(state ?? {}), doneCommandL: true }),
          )
        }
        if (
          this._reactiveStorageService.applicationUserPersistentStorage
            .checklistState?.doneAddingCodeSelection !== true &&
          (contextUsed.fileSelections.length > 0 || contextUsed.selections.length > 0)
        ) {
          const checklistState =
            this._reactiveStorageService.applicationUserPersistentStorage
              .checklistState
          this._reactiveStorageService.setApplicationUserPersistentStorage(
            "checklistState",
            (state) => ({ ...(state ?? {}), doneAddingCodeSelection: true }),
          )
        }
        this.shouldSkipCapabilities(
          options?.capabilityProcessesToSkip,
          "composer-settled",
        ) ||
          this._composerEventService.fireMaybeRunOnComposerSettled({
            composerId: composerId,
          }),
          await this.renameComposer(composerId),
          this.updateComposerSummaryIfOutdated(composerId),
          aiBubble &&
            aiBubble.timingInfo &&
            this._composerDataService.updateComposerDataSetStore(composerId, (state) =>
              state(
                "conversation",
                (bubble) => bubble.bubbleId === aiBubble.bubbleId,
                "timingInfo",
                (timingInfo) => {
                  if (timingInfo)
                    return {
                      ...timingInfo,
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
              ?.isAgentic === true
          )
            return
          try {
            if (
              await this._composerUtilsService.runCapabilitiesForProcess(
                e,
                "start-submit-chat",
                {
                  composerId: n.composerId,
                  isCapabilityIteration: false,
                  submitChatProps: { text: t, extra: s },
                  isCacheWarming: true,
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
          if (l !== undefined) {
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
                a.usesCodebase !== undefined && a.usesCodebase !== false ? a : undefined,
              useDiffReview: false,
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
              metadata: undefined,
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
          if (Z === undefined) throw new Error("last message is undefined")
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
                { disableImageRemoval: true, lastBubbleContext: m },
              ),
            Ie = this._composerModesService.getComposerUnifiedMode(e),
            qe = this.getModelDetails(Ie)
          let et = await this._aiService.getCurrentFileInfo()
          const We = {
            conversationId: n.composerId,
            conversation: Oe,
            allowLongFileScan: true,
            explicitContext: await this._aiService.getExplicitContext(),
            documentationIdentifiers: (p.selectedDocs ?? []).map(
              (lt) => lt.docId,
            ),
            quotes: m.quotes ?? [],
            canHandleFilenamesAfterLanguageIds: true,
            modelDetails: qe,
            useWeb: m.useWeb ? "full_search" : undefined,
            externalLinks: m.externalLinks ?? [],
            projectContext: w,
            diffsForCompressingFiles: [],
            shouldCache:
              this._reactiveStorageService.applicationUserPersistentStorage
                .cacheComposerPrompts,
            multiFileLinterErrors: G,
            currentFile: et,
            useNewCompressionScheme: true,
            additionalRankedContext: [],
            fileDiffHistories: [],
            useUnifiedChatPrompt: false,
          }
          try {
            await this._composerUtilsService.runCapabilitiesForProcess(
              e,
              "mutate-request",
              {
                composerId: n.composerId,
                humanBubbleId: y.bubbleId,
                isCapabilityIteration: false,
                contextUsed: m,
                isCacheWarming: true,
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
          r !== undefined && clearTimeout(r), o.dispose()
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
          isResume: true,
          bubbleId: undefined,
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
                : undefined,
            a = this._composerModesService.getComposerUnifiedMode(e),
            l = [...t.data.conversation]
              .reverse()
              .map((v) => v.conversationSummary)
              .filter((v) => v !== undefined)[0],
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
      if (o.every((c) => c.text.length === 0 && c.errorDetails === undefined)) {
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
          this._composerViewsService.focus(e, true)
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
      switch (true) {
        case t === "default" || t.includes("cursor"):
          s = false
          break
        case t.includes("gpt") || t.includes("o1") || t.includes("o3"):
          s =
            this._reactiveStorageService.applicationUserPersistentStorage
              .useOpenAIKey ?? false
          break
        case t.includes("claude"):
          s =
            this._reactiveStorageService.applicationUserPersistentStorage
              .useClaudeKey ?? false
          break
        case t.includes("gemini"):
          s =
            this._reactiveStorageService.applicationUserPersistentStorage
              .useGoogleKey ?? false
          break
        default:
          s = true
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
    async populateCodeChunksInConversation(e, t, s = false) {
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
