// @ts-check

// 391749
export function createComposerService(params) {
  const {V, __decorate, __param, __disposeResources, __addDisposableResource, R, At, Ve, Pa, ei, Z, it, Br, Xt, u0, x5, oy, nt, ve, cursorCredsService, si, Ce, Ci, Md, Gi, Na, sh, $h, nl, Vo, M_, NI, selectedContextService, aiFeatureStatusService, everythingProviderService, aiAssertService, YC, fr, ue, qi, Hi, cS, es, uue, composerUtilsService, yi, QJ, qgs, _C, mo, kYe, wY, f5, xHt, Ul, fn, vk, RYe, UE, gl, GHt, fu, Det, Zm, eoe, J9, U, Hk, D7, Yt, wf, Dle, $Ui, cm, Dg, vp, T7, Mae, yI, rt, fs, u2, RUi, $I, bs, HC, zRi, v2i, dP, LBi, ls, jt, _n, sG, Er, Cf, rl, ev, J9i, du, vVe, wn, _cs, Q9, N1, jB, Va, Tg, nm, bn, Nh, QWe, One, B4i, BP, f1r, _4i, l7, G, Ggs, zgs, cb, OP, Es, Qb, J1t, ce, cEt, xEt, extUri, ice, B5i, vBi, Ln, _5i, vI, zr, Jgs, EditHistoryDiffFormatter, V1r, Kgs, Mit, x2, U1, fy, DBi, rI, LC, l2i, a2i } = params;

  var G1r = {
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
  J1r = {
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
  K1r = 1,
  Y1r = 1,
  X1r = 3,
  Q1r = 10,
  Z1r = (i) => {
    const {
        content: e,
        minChunkCharCount: t,
        maxChunkCharCount: s,
        minDelayMs: n,
        maxDelayMs: r,
      } = i,
      o = t ?? K1r,
      a = s ?? Y1r,
      l = n ?? X1r,
      c = r ?? Q1r
    return async function* () {
      let h = 0
      for (; h < e.length; ) {
        const u = Math.floor(Math.random() * (a - o) + o),
          d = Math.floor(Math.random() * (c - l) + l)
        yield { text: e.slice(h, h + u) },
          await new Promise((g) => setTimeout(g, d)),
          (h += u)
      }
    }
  },
  Dge = " ",
  exr = {
    id: "02_extraSpaceTest",
    content: `\`\`\`typescript:backend/server/src/aiHandlers/fastApply/modelProperties.ts${Dge}
// This module defines various properties and utility functions for handling different AI models.
// It includes functions to determine model capabilities, token limits, and other characteristics.

import { Ctxt, RequestCtxt } from '../../ctxt/ctxt.js';
// ... existing code ...
\`\`\`${Dge}

I added a comment at the top of the file to describe its purpose and contents. This helps provide context to anyone reading or maintaining the code.`,
  },
  txr = {
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
hi${Dge}`,
  },
  ixr = {
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

This should give anyone reading your README a clear understanding of what your project is about and how it's structured.${Dge}`,
  },
  sxr = {
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

This change ensures that even if there are no previous versions or if the version determination fails for some reason, the script will still proceed with a valid initial version number.${Dge}`,
  },
  nxr = {
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
  rxr = {
    id: "07_tabTest",
    content: `	\`\`\`typescript:backend/server/src/aiHandlers/fastApply/modelProperties.ts
// This module defines various properties and utility functions for handling different AI models.
// It includes functions to determine model capabilities, token limits, and other characteristics.

import { Ctxt, RequestCtxt } from '../../ctxt/ctxt.js';
// ... existing code ...
	\`\`\`

I added a comment at the top of the file to describe its purpose and contents. This helps provide context to anyone reading or maintaining the code.`,
  },
  oxr = {
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
  axr = {
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
  lxr = {
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
  cxr = {
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
  hxr = [J1r, G1r, exr, txr, ixr, sxr, nxr, rxr, oxr, axr, lxr, cxr],
  uxr = false,
  dxr = 500,
  fxr = 10,
  gxr = 1e6,
  Ygs = { shouldGracefullyFallBackOnTimeout: true },
  Sn = class extends V {
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
      h,
      u,
      d,
      g,
      p,
      m,
      b,
      y,
      w,
      C,
      S,
      x,
      k,
      E,
      D,
      P,
      L,
      A,
      F,
      H,
      B,
      z,
      K,
      Q,
      se,
      he,
      ae,
      de,
      Ee,
      ke,
      Ae,
      Pe,
      ze,
      at,
      we,
      vt,
      lt,
      Xe,
      Oe,
    ) {
      super(),
        (this.reactiveStorageService = e),
        (this.instantiationService = t),
        (this.workspaceContextService = s),
        (this.aiService = n),
        (this.textModelService = r),
        (this.dataScrubbingService = o),
        (this.fastEditService = a),
        (this.inlineDiffService = l),
        (this.fileService = c),
        (this.editorService = h),
        (this.cursorCredsService = u),
        (this.editorGroupsService = d),
        (this.contextKeyService = g),
        (this.openerService = p),
        (this.repositoryService = m),
        (this.viewsService = b),
        (this.composerDataService = y),
        (this.cursorAuthenticationService = w),
        (this.editorWorkerService = C),
        (this.terminalService = S),
        (this.recentFilesTrackerService = x),
        (this.aiErrorService = k),
        (this.selectedContextService = E),
        (this.aiFeatureStatusService = D),
        (this.everythingProviderService = P),
        (this.aiAssertService = L),
        (this.gitContextService = A),
        (this.lifecycleService = F),
        (this.configurationService = H),
        (this.modelService = B),
        (this.languageService = z),
        (this.composerViewsService = K),
        (this.labelService = Q),
        (this.contextBankService = se),
        (this.composerUtilsService = he),
        (this._codeEditorService = ae),
        (this.aiFileInfoService = de),
        (this.toolV2Service = Ee),
        (this.analyticsService = ke),
        (this.markerService = Ae),
        (this.aiApplyToFileActionsService = Pe),
        (this.terminalExecutionService = ze),
        (this.prettyDialogService = at),
        (this.toolsV2HandlerRegistryService = we),
        (this.filesConfigurationService = vt),
        (this.textFileService = lt),
        (this.composerUnificationService = Xe),
        (this.mcpService = Oe),
        (this._shouldOpenNextAppliedFile = false),
        (this._composerEditingStates = new Map()),
        (this._isTurningCachedCodeBlocksToDiffs = false),
        (this._fileWatchers = new Map()),
        (this._uriToCachedCodeBlocks = new Map()),
        (this._uriToCachedCodeBlocksQueue = new Map()),
        (this._composerApplyingDiffsState = new Map()),
        (this._ignoreChangesToContext = new Set()),
        (this._fastApplyQueue = new UE(fxr)),
        (this._skipHandleAbortChat = new Set()),
        (this._recentlyResumed = false),
        (this._onDidOpenComposer = this.D(new R())),
        (this.onDidOpenComposer = this._onDidOpenComposer.event),
        (this._onDidInsertTerminalText = this.D(new R())),
        (this.onDidInsertTerminalText = this._onDidInsertTerminalText.event),
        (this._onContextRemoved = this.D(new R())),
        (this.onContextRemoved = this._onContextRemoved.event),
        (this._onProjectContextRemoved = this.D(new R())),
        (this.onProjectContextRemoved = this._onProjectContextRemoved.event),
        (this._onDidEnableDisableComposer = this.D(new R())),
        (this.onDidEnableDisableComposer =
          this._onDidEnableDisableComposer.event),
        (this._onShouldShowPreview = this.D(new R())),
        (this.onShouldShowPreview = this._onShouldShowPreview.event),
        (this._onManuallyRegisteringCodeBlock = this.D(new R())),
        (this.onManuallyRegisteringCodeBlock =
          this._onManuallyRegisteringCodeBlock.event),
        (this._onShouldForceText = this.D(new R())),
        (this.onShouldForceText = this._onShouldForceText.event),
        (this._onDidSendRequest = this.D(new R())),
        (this.onDidSendRequest = this._onDidSendRequest.event),
        (this._onDidAiEditFile = this.D(new R())),
        (this.onDidAiEditFile = this._onDidAiEditFile.event),
        (this._onDidFinishApplyingCodeBlock = this.D(new R())),
        (this.onDidFinishApplyingCodeBlock =
          this._onDidFinishApplyingCodeBlock.event),
        (this._onDidSubmitChat = this.D(new R())),
        (this.onDidSubmitChat = this._onDidSubmitChat.event),
        (this._onDidFinishAiEditToolCall = this.D(new R())),
        (this.onDidFinishAiEditToolCall =
          this._onDidFinishAiEditToolCall.event),
        (this.latestSubmitWarmCacheRequestTimes = []),
        (this.recentTimeWindow = 60 * 1e3),
        (this.maxRecentRequests = 10),
        (this.reapply = async (Ge, Et, Bt) => {
          const _e = { stack: [], error: undefined, hasError: false }
          try {
            const Nt = __addDisposableResource(
                _e,
                gl("ComposerService.reapply"),
                false,
              ),
              ni = this.composerDataService.getComposerData(Ge)
            if (!ni) return
            const ri = this.composerDataService.getLatestCodeBlockVersion(
                ni.composerId,
                Et,
              ),
              dn = Bt !== undefined ? Bt : ri,
              xi = ni.codeBlockData[Et.toString()][dn]
            xi?.isNotApplied &&
              this.composerDataService.updateComposerCodeBlock(
                ni.composerId,
                Et,
                dn,
                { isNotApplied: false },
              ),
              xi && ni.composerId
                ? await this.runFastApplyOnCodeBlock(
                    ni.composerId,
                    { ...xi },
                    { isReapply: true },
                  )
                : console.error(
                    `[composer] Unable to reapply version ${dn} for ${Et.toString()}`,
                  )
          } catch (Nt) {
            ;(_e.error = Nt), (_e.hasError = true)
          } finally {
            __disposeResources(_e)
          }
        }),
        (this.reapplyLastMessage = (Ge) => {
          const Et = { stack: [], error: undefined, hasError: false }
          try {
            const Bt = __addDisposableResource(
                Et,
                gl("ComposerService.reapplyLastMessage"),
                false,
              ),
              _e = this.composerDataService.getLastAiBubble(Ge)
            if (!_e?.codeBlocks) return
            for (const Nt of _e.codeBlocks) {
              const ni = this.composerDataService.getComposerCodeBlock(
                Ge,
                Nt.uri,
                Nt.version,
              )
              ;(ni?.isNoOp || ni?.status === "cancelled") &&
                this.reapply(Ge, Nt.uri)
            }
          } catch (Bt) {
            ;(Et.error = Bt), (Et.hasError = true)
          } finally {
            __disposeResources(Et)
          }
        }),
        (this.editorListeners = new Map()),
        (this.tokenCounterAbortControllerMap = new Map()),
        (this.shouldIgnoreTokenCountUpdate = false),
        (this._modelDiffStateManager = this.D(
          new GHt(
            this.editorWorkerService,
            this.modelService,
            this.editorService,
          ),
        )),
        this.D(
          this.onDidAiEditFile((Ge) => {
            this._modelDiffStateManager.resetUri(Ge.path)
          }),
        ),
        this.composerViewsService.setOpenComposer(async (Ge, Et) =>
          this.openComposer(Ge, Et),
        ),
        this.initializeEditorListeners().catch(console.error),
        this.reactiveStorageService.setApplicationUserPersistentStorage(
          "composerState",
          "isComposerEnabled2",
          true,
        ),
        (this.chatClient = this.instantiationService.createInstance(fu, {
          service: Det,
        }))
      const Fe = (Ge, Et, Bt) => {
          const _e = { stack: [], error: undefined, hasError: false }
          try {
            const Nt = __addDisposableResource(
              _e,
              gl("ComposerService.abortAndRemoveApplyGenerationUUID"),
              false,
            )
            if (!this.getComposer(Ge)) return
            const ri = this.composerDataService.getComposerCodeBlock(Ge, Et, Bt)
            ri?.applyGenerationUUID &&
              (this.abortGenerationUUID(ri.applyGenerationUUID),
              this.composerDataService.updateComposerCodeBlock(Ge, Et, Bt, {
                applyGenerationUUID: undefined,
              }))
          } catch (Nt) {
            ;(_e.error = Nt), (_e.hasError = true)
          } finally {
            __disposeResources(_e)
          }
        },
        ut = (Ge) => {
          const Et = { stack: [], error: undefined, hasError: false }
          try {
            const Bt = __addDisposableResource(
              Et,
              gl("ComposerService.handleDiffRemoval"),
              false,
            )
            if (!Ge.composerId) return
            Ge.accepted ? Ke(Ge.diffInfo, false) : Ue(Ge.diffInfo, false)
          } catch (Bt) {
            ;(Et.error = Bt), (Et.hasError = true)
          } finally {
            __disposeResources(Et)
          }
        },
        Ue = (Ge, Et = true) => {
          const Bt = { stack: [], error: undefined, hasError: false }
          try {
            const _e = __addDisposableResource(
                Bt,
                gl("ComposerService.handleDiffReject"),
                false,
              ),
              { composerId: Nt, version: ni } = Ge.composerMetadata ?? {}
            if (!Nt || ni === undefined) return
            const ri = this.getComposer(Nt)
            if (
              !ri ||
              !this.composerDataService.getComposerCodeBlock(Nt, Ge.uri, ni)
            )
              return
            if (!this.isCodeBlockRegisteredAsCached(Nt, Ge.uri, ni)) {
              this.composerDataService.setCodeBlockStatus(
                Nt,
                Ge.uri,
                ni,
                "rejected",
              )
              const Bs = this.composerDataService.getLastHumanBubble(Nt),
                yt = this.workspaceContextService.asRelativePath(Ge.uri)
              if (Bs) {
                const je = (St) => {
                  const Ie = (St ?? []).find((Dt) => Dt.filePath === yt)
                  if (Ie) {
                    const Dt = { ...Ie }
                    return (
                      Ie.userResponseType === Zm.REJECT
                        ? ((Dt.userResponseType = Zm.REJECT),
                          (Dt.userModificationsToSuggestedCodeBlocks = undefined))
                        : (Dt.userResponseType = Zm.MODIFY),
                      [...(St ?? []).filter((Mt) => Mt.filePath !== yt), Dt]
                    )
                  } else
                    return [
                      ...(St ?? []),
                      { userResponseType: Zm.REJECT, filePath: yt },
                    ]
                }
                ri.currentBubbleId
                  ? this.composerDataService.updateComposerDataSetStore(
                      Nt,
                      (St) => {
                        St(
                          "conversation",
                          (Ie) => Ie.bubbleId === ri.currentBubbleId,
                          "userResponsesToSuggestedCodeBlocks",
                          je,
                        )
                      },
                    )
                  : this.composerDataService.updateComposerDataSetStore(
                      Nt,
                      (St) => {
                        St("userResponsesToSuggestedCodeBlocks", je)
                      },
                    )
              }
              Fe(Nt, Ge.uri, ni)
            }
            this.deleteNewFileAndMaybeFolder(Nt, Ge.uri).then((Bs) => {
              Bs || (Et && this.saveFile(Ge.uri, { force: true }))
            })
          } catch (_e) {
            ;(Bt.error = _e), (Bt.hasError = true)
          } finally {
            __disposeResources(Bt)
          }
        },
        Ke = (Ge, Et = true) => {
          const Bt = { stack: [], error: undefined, hasError: false }
          try {
            const _e = __addDisposableResource(
                Bt,
                gl("ComposerService.handleDiffAccept"),
                false,
              ),
              { composerId: Nt, version: ni } = Ge.composerMetadata ?? {}
            if (!Nt || ni === undefined) return
            const ri = this.getComposer(Nt)
            if (
              !ri ||
              !this.composerDataService.getComposerCodeBlock(Nt, Ge.uri, ni)
            )
              return
            const xi = this.workspaceContextService.asRelativePath(Ge.uri)
            if (this.composerDataService.getLastHumanBubble(Nt)) {
              const yt = (je) => {
                const St = (je ?? []).find((Ie) => Ie.filePath === xi)
                if (St) {
                  const Ie = { ...St }
                  return (
                    St.userResponseType === Zm.ACCEPT
                      ? ((Ie.userResponseType = Zm.ACCEPT),
                        (Ie.userModificationsToSuggestedCodeBlocks = undefined))
                      : (Ie.userResponseType = Zm.MODIFY),
                    [...(je ?? []).filter((Dt) => Dt.filePath !== xi), Ie]
                  )
                } else
                  return [
                    ...(je ?? []),
                    { userResponseType: Zm.ACCEPT, filePath: xi },
                  ]
              }
              ri.currentBubbleId
                ? this.composerDataService.updateComposerDataSetStore(
                    Nt,
                    (je) => {
                      je(
                        "conversation",
                        (St) => St.bubbleId === ri.currentBubbleId,
                        "userResponsesToSuggestedCodeBlocks",
                        yt,
                      )
                    },
                  )
                : this.composerDataService.updateComposerDataSetStore(
                    Nt,
                    (je) => {
                      je("userResponsesToSuggestedCodeBlocks", yt)
                    },
                  )
            }
            Et && this.saveFile(Ge.uri, { force: true }),
              this.composerDataService.setCodeBlockStatus(
                Nt,
                Ge.uri,
                ni,
                "accepted",
              ),
              Fe(Nt, Ge.uri, ni),
              this.removeFileFromNewlyCreatedFilesAndFolders(Nt, Ge.uri)
          } catch (_e) {
            ;(Bt.error = _e), (Bt.hasError = true)
          } finally {
            __disposeResources(Bt)
          }
        },
        mt = (Ge, Et) => {
          const Bt = { stack: [], error: undefined, hasError: false }
          try {
            const _e = __addDisposableResource(
                Bt,
                gl("ComposerService.handlePartialDiff"),
                false,
              ),
              { composerId: Nt, version: ni } =
                Ge.diffInfo.composerMetadata ?? {}
            if (!Nt || ni === undefined) return
            const ri = this.getComposer(Nt)
            if (!ri) return
            const { diffInfo: dn, isDone: xi, change: Bs } = Ge
            if (!Bs) return
            const yt = this.composerDataService.getLastHumanBubble(Nt),
              je = this.workspaceContextService.asRelativePath(dn.uri)
            if (yt) {
              let St
              if (Et === "rejected") {
                const Dt = Bs.rejected.map((Ii) => `- ${Ii}`),
                  Mt = Bs.accepted.map((Ii) => `+ ${Ii}`),
                  ki = [...Dt, ...Mt]
                St = new eoe({ content: "", lines: ki })
              }
              const Ie = (Dt) => {
                const Mt = (Dt ?? []).find((ki) => ki.filePath === je)
                if (Mt) {
                  const ki = { ...Mt }
                  return (
                    St &&
                      ki.userModificationsToSuggestedCodeBlocks?.chunks.push(
                        St,
                      ),
                    Mt.userResponseType === Zm.ACCEPT && Et === "accepted"
                      ? (ki.userResponseType = Zm.ACCEPT)
                      : Mt.userResponseType === Zm.REJECT && Et === "rejected"
                        ? (ki.userResponseType = Zm.REJECT)
                        : (ki.userResponseType = Zm.MODIFY),
                    [...(Dt ?? []).filter((Ii) => Ii.filePath !== je), ki]
                  )
                } else
                  return [
                    ...(Dt ?? []),
                    {
                      userResponseType:
                        Et === "accepted" ? Zm.ACCEPT : Zm.REJECT,
                      filePath: je,
                      userModificationsToSuggestedCodeBlocks: new J9({
                        from: je,
                        to: je,
                        chunks: St ? [St] : [],
                      }),
                    },
                  ]
              }
              ri.currentBubbleId
                ? this.composerDataService.updateComposerDataSetStore(
                    Nt,
                    (Dt) => {
                      Dt(
                        "conversation",
                        (Mt) => Mt.bubbleId === ri.currentBubbleId,
                        "userResponsesToSuggestedCodeBlocks",
                        Ie,
                      )
                    },
                  )
                : this.composerDataService.updateComposerDataSetStore(
                    Nt,
                    (Dt) => {
                      Dt("userResponsesToSuggestedCodeBlocks", Ie)
                    },
                  )
            }
            xi && (Et === "accepted" ? Ke(dn) : Ue(dn))
          } catch (_e) {
            ;(Bt.error = _e), (Bt.hasError = true)
          } finally {
            __disposeResources(Bt)
          }
        },
        Mi = (Ge) => {
          const Et = { stack: [], error: undefined, hasError: false }
          try {
            const Bt = __addDisposableResource(
                Et,
                gl("ComposerService.handleAddDiffFromUndoRedo"),
                false,
              ),
              { composerId: _e, version: Nt } = Ge.composerMetadata ?? {}
            if (
              !_e ||
              Nt === undefined ||
              !this.getComposer(_e) ||
              !this.composerDataService.getComposerCodeBlock(_e, Ge.uri, Nt)
            )
              return
            this.composerDataService.updateComposerCodeBlock(_e, Ge.uri, Nt, {
              status: "completed",
            }),
              console.log(
                `[composer] Restored diff for ${Ge.uri.toString()} with version ${Nt}`,
              )
          } catch (Bt) {
            ;(Et.error = Bt), (Et.hasError = true)
          } finally {
            __disposeResources(Et)
          }
        }
      if (
        (this.D(this.inlineDiffService.onDidAcceptDiff(Ke)),
        this.D(this.inlineDiffService.onDidRejectDiff((Ge) => Ue(Ge))),
        this.D(
          this.inlineDiffService.onDidRemoveDiffFromUndoRedo((Ge) => ut(Ge)),
        ),
        this.D(this.inlineDiffService.onDidAddDiffFromUndoRedo((Ge) => Mi(Ge))),
        this.D(
          this.inlineDiffService.onDidAcceptPartialDiff((Ge) =>
            mt(Ge, "accepted"),
          ),
        ),
        this.D(
          this.inlineDiffService.onDidRejectPartialDiff((Ge) =>
            mt(Ge, "rejected"),
          ),
        ),
        this.D(
          this.selectedContextService.onDidAddContext((Ge) =>
            this.onAddContext(Ge),
          ),
        ),
        this.D(
          this.selectedContextService.onDidRemoveContext((Ge) =>
            this.onRemoveContext(Ge),
          ),
        ),
        this.updateTokenCountOfCurrentComposer(),
        this.D(
          this.editorService.onDidVisibleEditorsChange((Ge) => {
            const Et = { stack: [], error: undefined, hasError: false }
            try {
              const Bt = __addDisposableResource(
                  Et,
                  gl("ComposerService.onDidVisibleEditorsChange"),
                  false,
                ),
                _e = this.composerDataService.getComposerData(
                  this.composerDataService.selectedComposerId,
                )
              _e &&
                !_e.hasChangedContext &&
                (this.isComposerEmpty(
                  this.composerDataService.selectedComposerId,
                ) ||
                  _e.conversation.length === 0) &&
                this.refreshReactiveContextItem(
                  this.composerDataService.selectedComposerId,
                )
              const Nt = this.composerDataService.getComposerData(
                this.composerDataService.selectedChatId,
              )
              Nt &&
                !Nt.hasChangedContext &&
                this.refreshReactiveContextItem(
                  this.composerDataService.selectedChatId,
                )
            } catch (Bt) {
              ;(Et.error = Bt), (Et.hasError = true)
            } finally {
              __disposeResources(Et)
            }
          }),
        ),
        this.D(
          this.editorService.onDidActiveEditorChange((Ge) => {
            const Et = { stack: [], error: undefined, hasError: false }
            try {
              const Bt = __addDisposableResource(
                  Et,
                  gl("ComposerService.onDidActiveEditorChange"),
                  false,
                ),
                _e = this.composerDataService.getComposerData(
                  this.composerDataService.selectedComposerId,
                )
              _e &&
                !_e.hasChangedContext &&
                (this.isComposerEmpty(
                  this.composerDataService.selectedComposerId,
                ) ||
                  _e.conversation.length === 0) &&
                this.refreshReactiveContextItem(
                  this.composerDataService.selectedComposerId,
                )
              const Nt = this.composerDataService.getComposerData(
                this.composerDataService.selectedChatId,
              )
              Nt &&
                !Nt.hasChangedContext &&
                (this.isComposerEmpty(
                  this.composerDataService.selectedChatId,
                ) ||
                  Nt.conversation.length === 0) &&
                this.refreshReactiveContextItem(
                  this.composerDataService.selectedChatId,
                )
            } catch (Bt) {
              ;(Et.error = Bt), (Et.hasError = true)
            } finally {
              __disposeResources(Et)
            }
          }),
        ),
        this.D(
          this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
              () =>
                this.reactiveStorageService.applicationUserPersistentStorage
                  .composerState.mainComposerMode,
            ],
            onChange: () => {
              const Ge = { stack: [], error: undefined, hasError: false }
              try {
                const Et = __addDisposableResource(
                    Ge,
                    gl("ComposerService.onChangeEffectManuallyDisposed"),
                    false,
                  ),
                  Bt = this.composerDataService.getComposerData(
                    this.composerDataService.selectedComposerId,
                  )
                Bt &&
                  !Bt.hasChangedContext &&
                  (this.isComposerEmpty(
                    this.composerDataService.selectedComposerId,
                  ) ||
                    Bt.conversation.length === 0) &&
                  this.refreshReactiveContextItem(
                    this.composerDataService.selectedComposerId,
                  )
                const _e = this.composerDataService.getComposerData(
                  this.composerDataService.selectedChatId,
                )
                _e &&
                  !_e.hasChangedContext &&
                  (this.isComposerEmpty(
                    this.composerDataService.selectedChatId,
                  ) ||
                    _e.conversation.length === 0) &&
                  this.refreshReactiveContextItem(
                    this.composerDataService.selectedChatId,
                  )
              } catch (Et) {
                ;(Ge.error = Et), (Ge.hasError = true)
              } finally {
                __disposeResources(Ge)
              }
            },
          }),
        ),
        this.D(
          this.fileService.onDidFilesChange((Ge) => {
            const Et = Array.from(
              new Set([
                ...this._uriToCachedCodeBlocks.keys(),
                ...this._uriToCachedCodeBlocksQueue.keys(),
              ]),
            )
            for (const Bt of Et) {
              const _e = U.parse(Bt)
              if (Ge.contains(_e)) {
                const Nt =
                  this._uriToCachedCodeBlocksQueue.get(_e.toString()) ?? []
                this.markUriAsOutdated(_e, Nt.length > 0),
                  Nt.length > 0 &&
                    (this._uriToCachedCodeBlocks.set(_e.toString(), Nt),
                    this._uriToCachedCodeBlocksQueue.delete(_e.toString()))
              }
            }
          }),
        ),
        !this.reactiveStorageService.workspaceUserPersistentStorage
          .composerState)
      ) {
        const Ge = { stack: [], error: undefined, hasError: false }
        try {
          const Et = __addDisposableResource(
            Ge,
            gl("ComposerService.setWorkspaceUserPersistentStorage"),
            false,
          )
          this.reactiveStorageService.setWorkspaceUserPersistentStorage(
            "composerState",
            { horizontalBarSize: 520, tabHeight: 400 },
          )
        } catch (Et) {
          ;(Ge.error = Et), (Ge.hasError = true)
        } finally {
          __disposeResources(Ge)
        }
      }
      const qe = Hk.bindTo(this.contextKeyService)
      qe.set(
        this.reactiveStorageService.applicationUserPersistentStorage
          .composerState.isComposerEnabled2,
      ),
        this.D(
          this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
              () =>
                this.reactiveStorageService.applicationUserPersistentStorage
                  .composerState.isComposerEnabled2,
            ],
            onChange: ({ deps: Ge }) => {
              const Et = { stack: [], error: undefined, hasError: false }
              try {
                const Bt = __addDisposableResource(
                  Et,
                  gl("ComposerService.onChangeEffectManuallyDisposed"),
                  false,
                )
                this._onDidEnableDisableComposer.fire({ enabled: Ge[0] })
              } catch (Bt) {
                ;(Et.error = Bt), (Et.hasError = true)
              } finally {
                __disposeResources(Et)
              }
            },
          }),
        ),
        this.D(
          this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
              () => {
                const Ge =
                  this.composerDataService.allComposersData
                    .selectedComposerHandle
                return Ge ? Ge.data.context.fileSelections : []
              },
            ],
            onChange: () => {
              const Ge = { stack: [], error: undefined, hasError: false }
              try {
                const Et = __addDisposableResource(
                  Ge,
                  gl("ComposerService.onChangeEffectManuallyDisposed"),
                  false,
                )
                this.composerDataService.getContextGraphFilesFromFileSelections(
                  this.composerDataService.selectedComposerId,
                )
              } catch (Et) {
                ;(Ge.error = Et), (Ge.hasError = true)
              } finally {
                __disposeResources(Ge)
              }
            },
          }),
        ),
        this.D(
          this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
              () => {
                const Ge =
                  this.composerDataService.allComposersData.selectedChatHandle
                return Ge ? Ge.data.context.fileSelections : []
              },
            ],
            onChange: () => {
              const Ge = { stack: [], error: undefined, hasError: false }
              try {
                const Et = __addDisposableResource(
                  Ge,
                  gl("ComposerService.onChangeEffectManuallyDisposed"),
                  false,
                )
                this.composerDataService.getContextGraphFilesFromFileSelections(
                  this.composerDataService.selectedChatId,
                )
              } catch (Et) {
                ;(Ge.error = Et), (Ge.hasError = true)
              } finally {
                __disposeResources(Ge)
              }
            },
          }),
        )
      const Be = (Ge) => {
        const Et = []
        for (const Bt of D7)
          Et.push(() => {
            const _e = this.composerDataService.getComposerData(
              Ge
                ? this.composerDataService.selectedChatId
                : this.composerDataService.selectedComposerId,
            )
            return _e ? _e.context[Bt] : []
          })
        return Et
      }
      this.D(
        this.reactiveStorageService.onChangeEffectManuallyDisposed({
          deps: Be(),
          onChange: () => {
            const Ge = { stack: [], error: undefined, hasError: false }
            try {
              const Et = __addDisposableResource(
                Ge,
                gl("ComposerService.onChangeEffectManuallyDisposed"),
                false,
              )
              if (
                this._ignoreChangesToContext.has(
                  this.composerDataService.selectedComposerId,
                )
              )
                this._ignoreChangesToContext.delete(
                  this.composerDataService.selectedComposerId,
                )
              else
                try {
                  this.updateComposer(
                    this.composerDataService.selectedComposerId,
                    { hasChangedContext: true },
                  )
                } catch {}
            } catch (Et) {
              ;(Ge.error = Et), (Ge.hasError = true)
            } finally {
              __disposeResources(Ge)
            }
          },
        }),
      ),
        this.D(
          this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: Be(true),
            onChange: () => {
              const Ge = { stack: [], error: undefined, hasError: false }
              try {
                const Et = __addDisposableResource(
                  Ge,
                  gl("ComposerService.onChangeEffectManuallyDisposed"),
                  false,
                )
                if (
                  this._ignoreChangesToContext.has(
                    this.composerDataService.selectedChatId,
                  )
                )
                  this._ignoreChangesToContext.delete(
                    this.composerDataService.selectedChatId,
                  )
                else
                  try {
                    this.updateComposer(
                      this.composerDataService.selectedChatId,
                      { hasChangedContext: true },
                    )
                  } catch {}
              } catch (Et) {
                ;(Ge.error = Et), (Ge.hasError = true)
              } finally {
                __disposeResources(Ge)
              }
            },
          }),
        ),
        qe.set(this.isComposerEnabled()),
        this.selectedContextService.addOnCursorIgnoreLoadedCallback(() => {
          this.refreshReactiveContextItemAtStartup().catch(console.error)
        }),
        this.D(
          this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
              () =>
                this.reactiveStorageService.applicationUserPersistentStorage
                  .aiSettings.composerModel,
            ],
            onChange: () => {
              this.handleUserSwitchedModel(
                this.composerDataService.selectedComposerId,
              )
            },
          }),
        ),
        this.D(
          this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [() => this.composerDataService.selectedComposerId],
            onChange: ({ deps: Ge, prevDeps: Et }) => {
              const Bt = Ge?.[0],
                _e = Et?.[0]
              Bt !== _e && _e && this.close(_e, { skipHiding: true })
            },
          }),
        ),
        this.D(
          this.composerViewsService.onDidChangeChatPaneVisibility((Ge) => {
            this.reactiveStorageService.setNonPersistentStorage({
              shouldShowInsertChatWidget: Ge,
            })
          }),
        ),
        this.composerDataService.setOnInlineDiffsLoadedHook(
          this.onInlineDiffsLoadedHook.bind(this),
        ),
        this.aiFeatureStatusService.maybeRefreshFeatureStatus(
          "autoSaveAgenticEdits",
        ),
        this.selectedContextService.setUpdateComposerSummaryIfOutdated(
          async (Ge) => this.updateComposerSummaryIfOutdated(Ge),
        ),
        this.D(
          this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
              () =>
                this.composerDataService.allComposersData
                  .selectedComposerHandle,
            ],
            onChange: () => {
              setTimeout(() => {
                this.updateTokenCountOfCurrentComposer()
              }, 500)
            },
          }),
        ),
        this.D(
          this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
              () => {
                const Ge = this.composerDataService.getComposerData(
                  this.composerDataService.selectedComposerId,
                )
                if (Ge) return Ge.editingBubbleId
              },
            ],
            onChange: ({ deps: Ge }) => {
              const Et = Ge?.[0]
              Et && this.updateTokenCountOfCurrentComposer(Et)
            },
          }),
        )
    }
    get applicationComposerSettings() {
      return this.reactiveStorageService.applicationUserPersistentStorage
        .composerState
    }
    shouldCache(e, t) {
      const s = this.composerDataService.getComposerFromIdOrHandle(e)
      if (!s)
        throw new Error(
          "[composer] shouldCache called for non-existent composer",
        )
      if (t !== undefined) {
        const n = this.composerDataService.getComposerCodeBlock(
          e,
          t.uri,
          t.version,
        )
        if (n && n.isNotApplied) return true
      }
      return this.composerDataService.getComposerForceMode(e) === "chat"
        ? false
        : s.composerId !== this.composerDataService.selectedComposerId ||
            this.isBackground(s.composerId)
    }
    updateComposer(e, t) {
      this.composerDataService.updateComposerData(e, t)
    }
    getComposer(e) {
      const t = this.composerDataService.getComposerData(e)
      if (!t) {
        console.error(
          "[composer] getComposer called for non-existent composer",
          e,
        )
        return
      }
      return t
    }
    getComposerEditingState(e) {
      let t = this._composerEditingStates.get(e)
      return (
        t ||
          ((t = {
            fastApplyQueue: {},
            fastApplyRunningMap: {},
            codeEditorsMap: {},
          }),
          this._composerEditingStates.set(e, t)),
        t
      )
    }
    getApplyingDiffsState(e) {
      let t = this._composerApplyingDiffsState.get(e)
      return (
        t ||
          ((t = {
            isReactivatingApplyingDiffs: {},
            applyingDiffsBacklogLines: {},
          }),
          this._composerApplyingDiffsState.set(e, t)),
        t
      )
    }
    resetComposerEditingState(e) {
      this._composerEditingStates.delete(e)
    }
    unregisterCachedCodeBlock(e, t, s) {
      this.composerDataService.updateComposerCodeBlock(e, t, s, {
        isCached: false,
        isNotApplied: false,
      })
      const n = typeof e == "string" ? e : e.data.composerId,
        o = (this._uriToCachedCodeBlocks.get(t.toString()) ?? []).filter(
          (c) => c.composerId !== n || c.version !== s,
        ),
        l = (this._uriToCachedCodeBlocksQueue.get(t.toString()) ?? []).filter(
          (c) => c.composerId !== n || c.version !== s,
        )
      if (o.length === 0 && l.length === 0) {
        this._fileWatchers.get(t.toString())?.dispose(),
          this._fileWatchers.delete(t.toString()),
          this._uriToCachedCodeBlocks.delete(t.toString()),
          this._uriToCachedCodeBlocksQueue.delete(t.toString())
        return
      }
      this._uriToCachedCodeBlocks.set(t.toString(), o),
        this._uriToCachedCodeBlocksQueue.set(t.toString(), l)
    }
    unregisterAllCachedCodeBlocks(e) {
      const t = this.composerDataService.getAllCachedCodeBlocks(e)
      for (const s of t) this.unregisterCachedCodeBlock(e, s.uri, s.version)
    }
    registerCachedCodeBlock(e, t, s, n) {
      if (
        (this.composerDataService.updateComposerCodeBlock(e, t, s, {
          isCached: true,
        }),
        !this._fileWatchers.has(t.toString()))
      ) {
        const r = this.fileService.watch(t)
        this._fileWatchers.set(t.toString(), r)
      }
      if (n) {
        const r = this._uriToCachedCodeBlocksQueue.get(t.toString()) ?? []
        this._uriToCachedCodeBlocksQueue.set(t.toString(), [
          ...r.filter((l) => l.composerId !== e || l.version !== s),
          { composerId: e, version: s },
        ])
        const a = (this._uriToCachedCodeBlocks.get(t.toString()) ?? []).filter(
          (l) => l.composerId !== e || l.version !== s,
        )
        this._uriToCachedCodeBlocks.set(t.toString(), a)
      } else {
        const r = this._uriToCachedCodeBlocks.get(t.toString()) ?? []
        this._uriToCachedCodeBlocks.set(t.toString(), [
          ...r.filter((o) => o.composerId !== e || o.version !== s),
          { composerId: e, version: s },
        ])
      }
    }
    markUriAsOutdated(e, t) {
      if (
        !this._uriToCachedCodeBlocks.has(e.toString()) ||
        !this._fileWatchers.has(e.toString())
      )
        return
      const s = this._uriToCachedCodeBlocks.get(e.toString()) ?? []
      for (const { composerId: n, version: r } of s) {
        const o = this.composerDataService.getComposerCodeBlock(n, e, r)
        o && o.isNotApplied
          ? (this.composerDataService.updateComposerDataSetStore(n, (a) =>
              a(
                "codeBlockData",
                e.toString(),
                (l) => l.version === r,
                "originalModelDiffWrtV0",
                undefined,
              ),
            ),
            this.composerDataService.updateComposerDataSetStore(n, (a) =>
              a(
                "codeBlockData",
                e.toString(),
                (l) => l.version === r,
                "newModelDiffWrtV0",
                undefined,
              ),
            ))
          : (this.composerDataService.setCodeBlockStatus(n, e, r, "outdated"),
            this.composerDataService.updateComposerCodeBlock(n, e, r, {
              isCached: false,
            }))
      }
      t ||
        (this._fileWatchers.get(e.toString())?.dispose(),
        this._fileWatchers.delete(e.toString())),
        this._uriToCachedCodeBlocks.delete(e.toString()),
        this._uriToCachedCodeBlocksQueue.delete(e.toString())
    }
    isNewFile(e, t) {
      return !!this.getComposer(e)?.newlyCreatedFiles.some(
        (n) => n.uri.toString() === t.toString(),
      )
    }
    async createNewFileAndMaybeFolder(e, t, s) {
      if (!this.getComposer(e) || !e) return []
      const r = await this.fileService.exists(t),
        o = []
      if (!r) {
        let a = t.fsPath
        for (; a.length > 0; ) {
          const h = a.split("/").slice(0, -1).join("/")
          if (await this.fileService.exists(U.file(h))) break
          o.push({ uri: U.file(h) }), (a = h)
        }
        await this.fileService.createFile(t, Yt.fromString(" "), {
          overwrite: s,
        })
        const l = 10
        let c = 0
        for (; !(await this.fileService.exists(t)) && c < l; )
          await new Promise((h) => setTimeout(h, dxr)), c++
        if (c === l)
          return (
            console.error(
              `[composer] Failed to create file ${t.toString()} after ${l} attempts`,
            ),
            []
          )
      }
      return o
    }
    async checkToCreateNewFile(e, t, s) {
      const n = this.composerDataService.getComposerFromIdOrHandle(e)
      if (!n || !e) return []
      if (await this.fileService.exists(t)) return []
      const o = await this.createNewFileAndMaybeFolder(e, t, s),
        a = [],
        l = new Set(n?.newlyCreatedFolders.map((u) => u.uri.toString()) ?? [])
      for (const u of o) l.has(u.uri.toString()) || a.push(u)
      const h = !n?.newlyCreatedFiles?.some(
        (u) => u.uri.toString() === t.toString(),
      )
        ? [{ uri: t }]
        : []
      return (
        this.updateComposer(e, {
          newlyCreatedFiles: [...(n?.newlyCreatedFiles ?? []), ...h],
          newlyCreatedFolders: [...(n?.newlyCreatedFolders ?? []), ...a],
        }),
        o
      )
    }
    async deleteFolder(e) {
      if (await this.fileService.exists(e))
        try {
          await this.fileService.del(e, { recursive: true })
        } catch (t) {
          console.error(`Error deleting folder ${e.toString()}:`, t)
        }
    }
    async deleteFile(e) {
      const t = this.inlineDiffService.diffInfos.filter(
        (s) => s.uri.toString() === e.toString(),
      )
      for (const s of t) this.inlineDiffService.remove(s.diffId)
      try {
        if (await this.fileService.exists(e)) {
          let n
          try {
            ;(n = await this.textModelService.createModelReference(e)),
              n.object.textEditorModel.setValue(" ")
          } finally {
            n?.dispose()
          }
          const r = this.filesConfigurationService.disableAutoSave(e)
          await this.saveFile(e, {
            force: true,
            waitForEditorToOpen: true,
            overwrite: true,
          }),
            r.dispose(),
            n.dispose(),
            await this.fileService.del(e, { recursive: true })
        }
        const s = this.editorService.findEditors(e)
        if (s.length > 0)
          for (const n of s)
            await this.editorService.revert(n, { force: true }),
              await this.editorService.closeEditor(n)
      } catch (s) {
        console.error(`Error deleting file ${e.toString()}:`, s)
      }
    }
    async deleteNewFileAndMaybeFolder(e, t) {
      const s = this.getComposer(e)
      if (
        !s ||
        !e ||
        !s.newlyCreatedFiles?.find((r) => r.uri.toString() === t.toString())
      )
        return false
      try {
        await this.deleteFile(t)
        const r =
          s.newlyCreatedFiles?.filter(
            (l) => l.uri.toString() !== t.toString(),
          ) ?? []
        let o = wf(s.newlyCreatedFolders) ?? []
        const a = o.filter((l) => t.toString().startsWith(l.uri.toString()))
        for (const l of a)
          (
            (await this.fileService.resolve(l.uri, { resolveMetadata: true }))
              .children ?? []
          ).filter((u) => !u.isDirectory).length === 0 &&
            (await this.fileService.del(l.uri, { recursive: true, useTrash: true }),
            (o = o.filter((u) => u.uri.toString() !== l.uri.toString())))
        return (
          this.updateComposer(e, {
            newlyCreatedFiles: r,
            newlyCreatedFolders: o,
          }),
          true
        )
      } catch (r) {
        return console.error(`Error deleting file ${t.toString()}:`, r), false
      }
    }
    removeFileFromNewlyCreatedFilesAndFolders(e, t) {
      const s = this.getComposer(e)
      !s ||
        !e ||
        this.updateComposer(e, {
          newlyCreatedFiles:
            s.newlyCreatedFiles?.filter(
              (n) => n.uri.toString() !== t.toString(),
            ) ?? [],
          newlyCreatedFolders:
            s.newlyCreatedFolders?.filter(
              (n) => !t.toString().startsWith(n.uri.toString()),
            ) ?? [],
        })
    }
    async saveFiles(e, t) {
      await Promise.allSettled(
        e.map(async (s) => {
          await this.saveFile(s, t)
        }),
      )
    }
    async saveFile(e, t) {
      if (t?.overwrite)
        return !!(await this.textFileService.save(e, {
          reason: 1,
          skipSaveParticipants: t?.skipSaveParticipants ?? false,
          force: t?.force ?? false,
          ignoreModifiedSince: true,
        }))
      let s = this.editorService.findEditors(e)
      if (
        (s.length === 0 &&
          t?.waitForEditorToOpen &&
          (await new Promise((r) => {
            setTimeout(r, 1e3),
              this.editorService.onWillOpenEditor((o) => {
                o.editor.resource?.toString() === e.toString() && r(undefined)
              })
          })),
        (s = this.editorService.findEditors(e)),
        s.length === 0)
      ) {
        const r = this.editorService.editors
          .filter(
            (o) =>
              o instanceof Dle &&
              o.preferredResource.toString() === e.toString(),
          )
          .map((o) => o.resource)
          .filter((o) => o !== undefined)
        r.length > 0 && (s = this.editorService.findEditors(r[0]))
      }
      return s.length === 0
        ? !!(await this.textFileService.save(e, {
            reason: 1,
            skipSaveParticipants: t?.skipSaveParticipants ?? false,
            force: t?.force ?? false,
            showPrettyDialogOnError: true,
          }))
        : (
            await this.editorService.save(s, {
              reason: 1,
              skipSaveParticipants: t?.skipSaveParticipants ?? false,
              force: t?.force ?? false,
              showPrettyDialogOnError: true,
            })
          ).success
    }
    cleanUpComposer(e, t) {
      const s = this.getComposer(e)
      if (!s) {
        console.error("[composer] no composer found for id", e)
        return
      }
      this.cancelAll(e, {
        skipRejectDiffs: t?.skipRejectDiffs,
        rejectSilently: t?.rejectSilently,
      }),
        this.resetComposerEditingState(e),
        this._composerApplyingDiffsState.set(e, {
          isReactivatingApplyingDiffs: {},
          applyingDiffsBacklogLines: {},
        }),
        this.unregisterAllCachedCodeBlocks(e),
        t?.skipCapabilitiesDisposal ||
          s.capabilities.forEach((n) => n.dispose())
    }
    async resetComposer(e, t, s) {
      const n = this.getComposer(e)
      if (!n) return
      const r = !this.isComposerContextUntouched(e),
        o = n.text,
        a = n.richText,
        l = t?.text ? t.text : r ? o : "",
        c = t?.richText ? t.richText : r ? a : "",
        h = $Ui(n, false)
      this.cleanUpComposer(e)
      let u = [],
        d = cm()
      if (r) {
        for (const p of D7)
          !n.context[p] ||
            !n.context.mentions[p] ||
            (Dg(p)
              ? (d[p] = n.context[p].filter((m) => {
                  const b = vp(p, m)
                  return (
                    n.context.mentions[p] &&
                    n.context.mentions[p][b]?.length > 0
                  )
                }))
              : n.context.mentions[p]?.length > 0 && (d[p] = n.context[p]))
        d.mentions = T7()
        for (const p of D7)
          if (Dg(p))
            for (const m of d[p]) {
              const b = vp(p, m)
              d.mentions[p] || (d.mentions[p] = {}),
                (d.mentions[p][b] = n.context.mentions[p]?.[b] || [])
            }
          else d.mentions[p] = n.context.mentions[p]
      }
      u = Mae(this.instantiationService, this.reactiveStorageService, e, [])
      const g = {
        ...yI(),
        composerId: n.composerId ?? rt(),
        createdAt: n.createdAt ?? Date.now(),
        richText: c,
        text: l,
        hasChangedContext: false,
        context: d,
        backgroundInfo: n.backgroundInfo,
        capabilities: u,
        unifiedMode: h.unifiedMode ?? "edit",
        ...t,
      }
      console.log("[composer] new state", g, t),
        this.composerViewsService.isPrevBubbleFocused(g.composerId) &&
          this.focus(g.composerId),
        this._ignoreChangesToContext.add(g.composerId),
        this.updateComposer(g.composerId, g),
        s || this.refreshReactiveContextItem(g.composerId),
        this._onShouldForceText.fire({ composerId: g.composerId }),
        this.updateTokenCountOfCurrentComposer()
    }
    acceptDiff(e, t) {
      this.analyticsService.trackEvent("composer.accept_diff", {
        source: "composer",
      })
      const s = this.composerDataService.getInlineDiff(e, t)
      if (!s) {
        console.error("[composer] no diff id for uri", t)
        return
      }
      this.inlineDiffService.acceptDiff(s.id)
    }
    rejectDiff(e, t, s) {
      this.analyticsService.trackEvent("composer.reject_diff", {
        source: "composer",
      })
      const n = this.composerDataService.getInlineDiff(e, t)
      if (!n) {
        console.error("[composer] no diff id for uri", t)
        return
      }
      this.inlineDiffService.rejectDiff(n.id, {
        dontBreakConsolidation: s?.dontBreakConsolidation,
        rejectSilently: s?.rejectSilently,
      }),
        this.inlineDiffService.remove(n.id)
    }
    async acceptCached(e, t, s) {
      if (!this.composerDataService.getComposerData(e)) return
      const r = this.composerDataService.getComposerCodeBlock(e, t, s)
      if (!r || r.isCached !== true || !r.newModelDiffWrtV0) {
        console.error("[composer] no cached code block for uri", t)
        return
      }
      this.unregisterCachedCodeBlock(e, t, r.version)
      const o = this.composerUtilsService.getCodeBlockNewModelLines(
        e,
        t,
        r.version,
      )
      if (!o) {
        console.error("[composer] no new model lines for uri", t)
        return
      }
      await this.inlineDiffService.applyNewModelLinesToFile({
        uri: t,
        newModelLines: o,
      }),
        this.composerDataService.setCodeBlockStatus(e, t, r.version, "accepted")
    }
    rejectCached(e, t) {
      const s = this.composerDataService.getComposerData(e)
      if (!s) return
      const n = s.codeBlockData[t.toString()].find((r) => r.isCached === true)
      if (!n || n.isCached !== true) {
        console.error("[composer] no cached code block for uri", t)
        return
      }
      this.unregisterCachedCodeBlock(e, t, n.version),
        this.composerDataService.setCodeBlockStatus(e, t, n.version, "rejected")
    }
    async accept(e, t, s) {
      this.shouldCache(e) ? this.acceptCached(e, t, s) : this.acceptDiff(e, t)
    }
    reject(e, t, s) {
      this.shouldCache(e) ? this.rejectCached(e, t) : this.rejectDiff(e, t)
    }
    async acceptAllCached(e) {
      const t = this.composerDataService.getComposerData(e)
      if (!t) return
      const s = this.composerDataService.getAllCachedCodeBlocks(t.composerId),
        n = new Map()
      for (const r of s) n.set(r.uri, r.version)
      for (const [r, o] of n) this.acceptCached(e, r, o)
    }
    rejectAllCached(e) {
      const t = this.composerDataService.getAllCachedCodeBlocks(e)
      this.unregisterAllCachedCodeBlocks(e)
      for (const s of t)
        this.composerDataService.setCodeBlockStatus(
          e,
          s.uri,
          s.version,
          "rejected",
        )
    }
    acceptAllDiffs(e) {
      const t = this.composerDataService.getAllInlineDiffs(e)
      for (const s of t) this.acceptDiff(e, s.uri)
    }
    rejectAllDiffs(e, t) {
      const s = this.composerDataService.getComposerData(e)
      if (!s) return
      const n = this.getComposerEditingState(e)
      for (const o of Object.keys(n.fastApplyQueue)) {
        const a = U.parse(o),
          l = n.fastApplyQueue[o]
        if (!(o in s.codeBlockData)) {
          delete n.fastApplyQueue[o]
          continue
        }
        const c = s.codeBlockData[a.toString()].filter(
          (h) => h.status === "apply_pending",
        )
        for (const h of c)
          this.composerDataService.setCodeBlockStatus(
            e,
            h.uri,
            h.version,
            "rejected",
          )
        l.clear(), delete n.fastApplyQueue[o]
      }
      const r = this.composerDataService.getAllInlineDiffs(e)
      for (const o of r)
        this.rejectDiff(e, o.uri, { rejectSilently: t?.rejectSilently })
      ;(n.fastApplyQueue = {}), (n.fastApplyRunningMap = {})
    }
    async acceptAll(e) {
      this.analyticsService.trackEvent("composer.accept_all"),
        this.shouldCache(e)
          ? await this.acceptAllCached(e)
          : this.acceptAllDiffs(e)
    }
    rejectAll(e, t) {
      this.analyticsService.trackEvent("composer.reject_all"),
        this.shouldCache(e)
          ? this.rejectAllCached(e)
          : this.rejectAllDiffs(e, t)
    }
    shouldShowAcceptRejectAll(e) {
      const t = this.composerDataService.getComposerData(e)
      if (!t) return false
      const s = this.composerDataService.getAllInlineDiffs(e)
      return this.shouldCache(t.composerId)
        ? this.composerDataService
            .getAllCachedCodeBlocks(t.composerId)
            .some((r) => r.status === "cancelled" || r.status === "completed")
        : s.length > 0
    }
    shouldShowAcceptReject(e, t, s) {
      const n = this.composerDataService.getComposerData(e)
      if (
        !n ||
        (n.codeBlockData[t.toString()] ?? []).some(
          (o) => o.status === "applying" || o.status === "generating",
        )
      )
        return false
      if (this.shouldCache(n.composerId))
        return (n.codeBlockData[t.toString()] ?? []).some(
          (a) =>
            (a.status === "cancelled" || a.status === "completed") &&
            a.isCached === true,
        )
      {
        const o = this.composerDataService.getInlineDiff(n.composerId, t)
        return o ? (s !== undefined ? o.composerMetadata?.version === s : true) : false
      }
    }
    cacheAllDiffs(e) {
      const t = this.composerDataService.getComposerFromIdOrHandle(e)
      if (!t) return
      const s = this.composerDataService.getAllInlineDiffs(t.composerId)
      for (const n of s) {
        if (
          (console.log("[composer] caching diff", n.uri.toString()),
          n.composerMetadata?.version === undefined)
        ) {
          console.error(
            "[composer] caching diff with undefined version",
            n.uri.toString(),
          )
          continue
        }
        this.registerCachedCodeBlock(
          t.composerId,
          n.uri,
          n.composerMetadata.version,
          true,
        ),
          this.rejectDiff(t.composerId, n.uri, { dontBreakConsolidation: true })
      }
    }
    cancelOrRejectAllCodeBlocks(e) {
      const t = this.getComposerEditingState(e)
      ;(t.fastApplyQueue = {}), (t.fastApplyRunningMap = {})
      const s = this.composerDataService.getComposerData(e)
      if (s) {
        for (const n of Object.keys(s.codeBlockData ?? {})) {
          const r = U.parse(n),
            o = this.composerDataService.getLatestCodeBlockVersion(e, r),
            a = this.composerDataService.getCodeBlockStatus(e, r, o)
          a === "applying"
            ? this.cancelApply(e, r)
            : a === "generating" &&
              this.composerDataService.updateComposerCodeBlock(e, r, o, {
                status: "aborted",
              })
        }
        this.rejectAllDiffs(e)
      }
    }
    cancelApply(e, t) {
      const s = this.composerDataService.getComposerData(e)
      if (!s) return false
      const n = s.codeBlockData[t.toString()].find(
        (r) => r.status === "applying",
      )
      return n
        ? (n.applyGenerationUUID &&
            this.abortGenerationUUID(n.applyGenerationUUID),
          this.composerDataService.updateComposerCodeBlock(e, t, n.version, {
            status: "cancelled",
            applyGenerationUUID: undefined,
          }),
          this.saveFile(t, { force: true }),
          true)
        : (console.error(
            "[composer] cancelApply called for uri that is not applying",
            t,
          ),
          false)
    }
    resumeChat(e, t) {
      this.composerDataService.getComposerData(e) &&
        this.submitChatMaybeAbortCurrent(e, "", {
          ...(t ?? {}),
          isResume: true,
          bubbleId: undefined,
          skipAddNewHumanMessage: true,
        })
    }
    cancelChat(e) {
      const t = this.composerDataService.getComposerData(e)
      !t ||
        t.status !== "generating" ||
        (this.cancelAllCapabilities(t.composerId),
        t.chatGenerationUUID && this.abortGenerationUUID(t.chatGenerationUUID),
        this.updateComposer(t.composerId, {
          chatGenerationUUID: undefined,
          status: "aborted",
        }),
        this.composerDataService.setGeneratingCapabilitiesToAborted(
          t.composerId,
        ),
        this.composerDataService.setLoadingToolFormerToolsToCancelled(
          t.composerId,
        ))
    }
    async cancelCurrentStep(e) {
      const t = this.getComposer(e)
      if (!t) return
      if (
        t.status === "generating" &&
        !this.composerDataService.getIsBlockingUserDecision(e)
      ) {
        await this.cancelChat(e)
        return
      }
      if (
        this.composerDataService
          .getCodeBlocksOfStatuses(e, "applying")
          .filter((r) => !r.isNotApplied).length > 0
      ) {
        await this.cancelAllApplies(e)
        return
      }
      const n = this.composerDataService.getPendingUserDecisionGroup(e)
      if (n.length > 0) {
        for (const r of n) r.reject()
        return
      }
      if (this.composerDataService.isRunningCapabilities(e)) {
        await this.cancelAllCapabilities(e)
        return
      }
    }
    cancelAllApplies(e) {
      const t = this.composerDataService.getComposerData(e)
      if (!t) return
      const s = this.getComposerEditingState(t.composerId)
      ;(s.fastApplyQueue = {}), (s.fastApplyRunningMap = {})
      const n = this.composerDataService.getCodeBlocksOfStatuses(
        t.composerId,
        "apply_pending",
      )
      for (const a of n)
        this.composerDataService.setCodeBlockStatus(
          t.composerId,
          a.uri,
          a.version,
          "cancelled",
        )
      const r = this.composerDataService.getCodeBlocksOfStatuses(
          t.composerId,
          "applying",
        ),
        o = new Set(r.map(({ uri: a }) => a.toString()))
      for (const a of o) this.cancelApply(e, U.parse(a))
    }
    cancelAllCapabilities(e) {
      const t = this.composerDataService.getComposerData(e)
      t &&
        t.capabilities.forEach((s) => {
          typeof s.cancel == "function" && s.cancel()
        })
    }
    cancelAll(e, t) {
      const s = this.composerDataService.getComposerData(e)
      s &&
        (this.cancelChat(s.composerId),
        this.cancelAllApplies(s.composerId),
        this.cancelAllCapabilities(s.composerId),
        t?.skipRejectDiffs ||
          this.rejectAllDiffs(s.composerId, {
            rejectSilently: t?.rejectSilently,
          }))
    }
    computeCacheKey(e) {
      const t = {
        fileSelections: e.context.fileSelections.length,
        selections: e.context.selections.length,
        folderSelections: e.context.folderSelections?.length ?? 0,
        selectedCommits: e.context.selectedCommits?.length ?? 0,
        selectedPullRequests: e.context.selectedPullRequests?.length ?? 0,
        selectedDocs: e.context.selectedDocs?.length ?? 0,
        externalLinks: e.context.externalLinks?.length ?? 0,
        bubbleId: e.conversation.at(-1)?.bubbleId,
        modelName:
          this.reactiveStorageService.applicationUserPersistentStorage
            .aiSettings.composerModel,
      }
      return (
        (t.files = e.context.fileSelections.map((s) => ({
          uri: s.uri.toString(),
          isCurrentFile: s.isCurrentFile,
        }))),
        (t.folders = e.context.folderSelections?.map((s) => ({
          uri: s.relativePath,
        }))),
        JSON.stringify(t)
      )
    }
    handleUserDidType(e) {
      if (
        ((async () => {
          try {
            await Promise.resolve(),
              await this.aiFeatureStatusService.maybeRefreshFeatureStatus(
                "cacheComposerPrompts",
              )
            const c = this.aiFeatureStatusService.getCachedFeatureStatus(
              "cacheComposerPrompts",
            )
            c !==
              this.reactiveStorageService.applicationUserPersistentStorage
                .cacheComposerPrompts &&
              this.reactiveStorageService.setApplicationUserPersistentStorage(
                "cacheComposerPrompts",
                c,
              )
          } catch (c) {
            console.error("[composer] error refreshing cacheComposerPrompts", c)
          }
        })(),
        !this.reactiveStorageService.applicationUserPersistentStorage
          .cacheComposerPrompts)
      )
        return
      this.maybeInvalidateCache(e)
      const t = this.getComposer(e)
      if (!t) return
      let s = t.cachingStatus ?? {
        promptIsCached: false,
        numCharsTypedSincePromptChanged: 0,
      }
      const n = t.conversation.filter((c) => c.type === fs.AI).length > 0
      ;(async () => {
        await this.aiFeatureStatusService.maybeRefreshConfig(
          "composerKeystrokesBeforeCaching",
        ),
          await this.aiFeatureStatusService.maybeRefreshConfig(
            "composerKeystrokesBeforeCachingFollowups",
          ),
          await this.aiFeatureStatusService.maybeRefreshConfig(
            "composerKeystrokesBeforeCachingFollowupsTurboMode",
          )
      })().catch(() => {})
      const r =
          this.aiFeatureStatusService.getCachedConfig(
            "composerKeystrokesBeforeCaching",
          ) ?? 3,
        o =
          this.aiFeatureStatusService.getCachedConfig(
            "composerKeystrokesBeforeCachingFollowups",
          ) ?? 25,
        a =
          this.aiFeatureStatusService.getCachedConfig(
            "composerKeystrokesBeforeCachingFollowupsTurboMode",
          ) ?? 5,
        l = n
          ? this.reactiveStorageService.applicationUserPersistentStorage
              .turboModeOptions.useTurboMode === true
            ? a
            : o
          : r
      s.promptIsCached ||
        (s.numCharsTypedSincePromptChanged > l
          ? (this.maybeSubmitWarmCacheRequest(e, t.text, {
              richText: t.richText,
            }),
            this.updateComposer(e, {
              cachingStatus: {
                promptIsCached: true,
                promptLastCachedAt: Date.now(),
                cacheKey: this.computeCacheKey(t),
              },
            }))
          : this.updateComposer(e, {
              cachingStatus: {
                ...s,
                numCharsTypedSincePromptChanged:
                  s.numCharsTypedSincePromptChanged + 1,
              },
            }))
    }
    handleUserUsedFilePicker(e) {
      this.reactiveStorageService.applicationUserPersistentStorage
        .cacheComposerPrompts && this.maybeInvalidateCache(e)
    }
    handleUserSwitchedModel(e) {
      this.maybeInvalidateCache(e)
    }
    maybeInvalidateCache(e) {
      const t = this.getComposer(e)
      if (!t) return
      const s = 5 * 60 * 1e3,
        { cachingStatus: n } = t
      n?.promptIsCached === true &&
        (Date.now() - n.promptLastCachedAt > s ||
          n.cacheKey !== this.computeCacheKey(t)) &&
        this.updateComposer(e, {
          cachingStatus: {
            promptIsCached: false,
            numCharsTypedSincePromptChanged: 0,
          },
        })
    }
    async maybeSubmitWarmCacheRequest(e, t, s) {
      if (
        !this.reactiveStorageService.applicationUserPersistentStorage
          .cacheComposerPrompts
      )
        return
      const n = this.composerDataService.getComposerForceMode(e)
      if (
        n === "edit" &&
        (this.latestSubmitWarmCacheRequestTimes.push(Date.now()),
        (this.latestSubmitWarmCacheRequestTimes =
          this.latestSubmitWarmCacheRequestTimes.filter(
            (r) => Date.now() - r < this.recentTimeWindow,
          )),
        this.aiAssertService.assert(
          this.latestSubmitWarmCacheRequestTimes.length <=
            this.maxRecentRequests,
          "Too many recent warm cache requests! Please post in #bug-reports!",
        ),
        !(
          this.latestSubmitWarmCacheRequestTimes.length > this.maxRecentRequests
        ))
      )
        try {
          let r = this.getComposer(e)
          if (
            !r ||
            this.composerDataService.getComposerIsAgentic(e) ||
            [...r.conversation].reverse().find((lt) => lt.type === fs.HUMAN)
              ?.isAgentic === true
          )
            return
          try {
            if (
              await this.composerUtilsService.runCapabilitiesForProcess(
                e,
                "start-submit-chat",
                {
                  composerId: r.composerId,
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
          let l = u2(r.context),
            c = [...(r.userResponsesToSuggestedCodeBlocks ?? [])]
          const h = r.currentBubbleId
          let u = [...r.conversation]
          if (h !== undefined) {
            const lt = this.composerDataService.getComposerBubble(e, h)
            if (!lt) throw Error("[composer] bubble is undefined")
            const Xe = lt.context
            if (!Xe) throw Error("[composer] bubble context is undefined")
            ;(l = u2(Xe)),
              (c = [...(lt.userResponsesToSuggestedCodeBlocks ?? [])])
            const Oe = RUi(u2(Xe))
          }
          const d = l.fileSelections.map((lt) => $I(lt)),
            g = r.tabs
              .filter((lt) => lt.type === "code")
              .map((lt) => lt.uri.toString()),
            p = Array.from(new Set([...d, ...g])).map((lt) => ({
              uri: U.parse(lt),
              fileName: bs(lt),
            })),
            m = {
              ...l,
              usesCodebase:
                l.usesCodebase !== undefined && l.usesCodebase !== false ? l : undefined,
              useDiffReview: false,
            },
            b = { ...m, fileSelections: p }
          if (b.useWeb || b.usesCodebase) return
          const y = await this.aiService.aiClient(),
            w = HC()
          u = [
            ...u,
            {
              ...w,
              richText: s?.richText ?? t,
              context: m,
              text: t,
              userResponsesToSuggestedCodeBlocks: c,
            },
          ]
          let C,
            S = rt(),
            [x, k] = this.aiService.registerNewGeneration({
              generationUUID: S,
              metadata: undefined,
            })
          const E = new Set([
              ...Object.keys(r.codeBlockData ?? {}),
              ...p.map((lt) => lt.uri.toString()),
            ]),
            D = Array.from(E).map((lt) => U.parse(lt)),
            P = this.selectedContextService.getLinterErrorsForFiles(D),
            L = async () => {
              const lt = await this._modelDiffStateManager.renderChanges()
              return this._modelDiffStateManager.reset(), lt
            },
            A = this.selectedContextService.getHumanChanges(L()),
            F = this.selectedContextService.getCodeChunks(
              { ...b },
              { worktreePath: r.backgroundInfo?.worktreePath },
            ),
            H = this.composerDataService.getRelevantFiles(e),
            B =
              n === "edit"
                ? this.composerUtilsService.getRecentlyViewedFileInfo(F)
                : () => Promise.resolve([]),
            [z, K, Q, se, he] = await Promise.all([F, H, P, B, A]),
            ae = u.at(-1)
          if (ae === undefined) throw new Error("last message is undefined")
          ;(u = [
            ...u.slice(0, -1),
            {
              ...ae,
              attachedCodeChunks: z,
              relevantFiles: [
                ...K.map((lt) =>
                  this.workspaceContextService.asRelativePath(U.revive(lt.uri)),
                ),
              ],
              multiFileLinterErrors: [...Q.map((lt) => new zRi({ ...lt }))],
              humanChanges: he,
              attachedHumanChanges: m.useRecentChanges,
              ...se,
            },
          ]),
            (r = this.getComposer(e))
          const de =
            await this.composerUtilsService.populateCodeChunksInConversation(u)
          let Ee = de
          if (
            (n === "edit" &&
              (Ee =
                await this.composerUtilsService.populateRedDiffsInConversation(
                  de,
                )),
            !this.getComposer(e) || k.signal.aborted)
          )
            return
          const Ae =
              await this.composerUtilsService.populateConversationWithExtraContext(
                Ee,
                e,
                { disableImageRemoval: true, lastBubbleContext: b },
              ),
            ze = this.getModelDetails("composer")
          let at = await this.aiService.getCurrentFileInfo()
          const we = {
            conversationId: r.composerId,
            conversation: Ae,
            allowLongFileScan: true,
            explicitContext: await this.aiService.getExplicitContext(),
            documentationIdentifiers: (m.selectedDocs ?? []).map(
              (lt) => lt.docId,
            ),
            quotes: b.quotes ?? [],
            canHandleFilenamesAfterLanguageIds: true,
            modelDetails: ze,
            useWeb: b.useWeb ? "full_search" : undefined,
            externalLinks: b.externalLinks ?? [],
            projectContext: C,
            diffsForCompressingFiles: [],
            compressEdits: true,
            shouldCache:
              this.reactiveStorageService.applicationUserPersistentStorage
                .cacheComposerPrompts,
            multiFileLinterErrors: Q,
            currentFile: at,
            useNewCompressionScheme: true,
            additionalRankedContext: [],
            fileDiffHistories: [],
            useUnifiedChatPrompt:
              this.applicationComposerSettings.unification6 === "wochat",
          }
          try {
            await this.composerUtilsService.runCapabilitiesForProcess(
              e,
              "mutate-request",
              {
                composerId: r.composerId,
                humanBubbleId: w.bubbleId,
                isCapabilityIteration: false,
                contextUsed: b,
                isCacheWarming: true,
              },
              { request: we },
            )
          } catch {
            return
          }
          const vt = await y.warmComposerCache(we, { signal: k.signal })
          S && this.abortGenerationUUID(S)
        } catch {
        } finally {
        }
    }
    async debouncedMaybeKeepComposerCacheWarm(e, t, s) {
      const n = this.composerDataService.getComposerForceMode(e)
      await this.aiFeatureStatusService
        .maybeRefreshConfig("keepCacheWarmTimeout")
        .catch(() => {})
      const r =
        this.aiFeatureStatusService.getCachedConfig("keepCacheWarmTimeout") ??
        4.5 * 60 * 1e3
      let o
      const a = this.D(
        this.onDidSendRequest(() => {
          o !== undefined && clearTimeout(o), a.dispose()
        }),
      )
      o = setTimeout(async () => {
        if (
          (a.dispose(),
          this.composerDataService.getSelectedIdByForceMode(n) !== e)
        )
          return
        ;(await this.aiService.aiClient())
          .keepComposerCacheWarm({
            request: s,
            requestId: t,
            isComposerVisible: this.composerViewsService.isShowing(e),
          })
          .catch((h) => {})
      }, r)
    }
    shouldSkipCapabilities(e, t) {
      return e === "*" || (e ?? []).includes(t)
    }
    async submitChatMaybeAbortCurrent(e, t, s) {
      const n = Date.now()
      try {
        await this.composerUtilsService.ensureCapabilitiesAreLoaded(e)
      } catch (x) {
        console.error("[composer] error ensuring capabilities are loaded", x)
        return
      }
      this._onDidSubmitChat.fire({ composerId: e, bubbleId: s?.bubbleId })
      const r = this.composerDataService.getComposerUnifiedMode(e),
        o = r === "chat" || s?.isAsk,
        a = this.composerDataService.getComposerIsAgentic(e)
      s = {
        skipRegisteringCodeBlocks: s?.isThought ? true : undefined,
        capabilityProcessesToSkip: o
          ? [
              "start-submit-chat",
              "before-submit-chat",
              "after-submit-chat",
              "composer-settled",
            ]
          : s?.capabilityProcessesToSkip,
        ...(s ?? {}),
      }
      const l = this.getComposer(e)
      if (!l) {
        console.error("[composer] submitted without state!")
        return
      }
      if (
        (this.reactiveStorageService.nonPersistentStorage.composerState
          .isTestingHttp2Disabled
          ? true
          : (this.configurationService.getValue(v2i) ?? false)) &&
        a
      ) {
        await this.prettyDialogService.openDialog({
          title: "HTTP2 Not Supported",
          message: "Agentic mode is not supported when HTTP2 is disabled",
          primaryButton: { id: "dismiss", label: "Dismiss" },
        }),
          this.cancelChat(e),
          console.error("[composer] HTTP2 Not Supported")
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
            await this.composerUtilsService.runCapabilitiesForProcess(
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
        } catch (x) {
          console.error(
            "[composer] error running capabilities for start-submit-chat",
            x,
          ),
            this.updateComposer(e, { status: "aborted" })
          return
        }
      let h = new AbortController(),
        u = false,
        d = false,
        g = false,
        p = rt(),
        m,
        b,
        y = cm()
      const w = () => {
          m &&
            this.submitChatMaybeAbortCurrent(e, t, {
              ...s,
              bubbleId: m.bubbleId,
            })
        },
        C = (x) => {
          const k = this.aiErrorService.shouldShowImmediateErrorMessage(x),
            E = this.getComposer(e),
            D = this.composerDataService.getLastAiBubbleId(e),
            P =
              a &&
              this.composerDataService
                .getLastAiBubbles(e)
                .some((L) => (L.text.length ?? 0) > 0)
          if (k && E) {
            const L = dP(x)
            this.composerDataService.updateComposerDataSetStore(e, (A) =>
              A("conversation", (F) => F.bubbleId === D, "errorDetails", {
                generationUUID: p,
                error: L,
                message: x?.rawMessage,
                rerun: w,
                resume: P
                  ? () => {
                      this.resumeChat(e, s)
                    }
                  : undefined,
              }),
            )
          }
        }
      try {
        let x = function (_e, Nt) {
          const ni = Date.now()
          return _e.finally(() => {
            const ri = Date.now()
            console.log(`[composer.submitChat] ${Nt} took ${ri - ni}ms`)
          })
        }
        var S = x
        this.updateComposer(e, { status: "generating" }),
          this.composerUtilsService.clearErrorDetailsFromLatestAIMessages(e)
        const k = async () => {
            const _e = await this._modelDiffStateManager.renderChanges()
            return this._modelDiffStateManager.reset(), _e
          },
          E = await this.selectedContextService.getHumanChanges(k()),
          D = LBi(l.capabilities)
        let P = [...(l.userResponsesToSuggestedCodeBlocks ?? [])]
        if (D.length === 0 && s?.isCapabilityIteration) {
          console.error(
            "[composer] submitted capability iteration without capabilities!",
          )
          return
        }
        this.composerDataService.clearActionButtons(e)
        const L = !s?.isResume
        s.bubbleId = s?.bubbleId ?? l.currentBubbleId
        let A = false
        if (s?.bubbleId) {
          const _e = s.bubbleId ?? l.currentBubbleId,
            Nt = this.composerDataService.getComposerBubble(e, _e),
            ni = l.conversation.findIndex((St) => St.bubbleId === _e)
          if (!Nt) throw Error("[composer] current bubble is undefined")
          let ri
          Nt.type === fs.HUMAN
            ? ((ri = ni !== -1 ? l.conversation[ni + 1]?.bubbleId : undefined),
              (A = true))
            : (ri = _e)
          const dn = l.conversation.slice(ni + 1),
            xi = l.conversation.slice(0, ni),
            Bs = (St) => {
              const Ie = this.composerDataService.getComposerCapability(
                e,
                ls.TOOL_FORMER,
              )
              if (!Ie) return false
              const Dt = Ie.getBubbleData(St.bubbleId)
              return Dt ? Dt.tool === jt.RUN_TERMINAL_COMMAND_V2 : false
            },
            yt = dn.some(Bs),
            je = xi.some(Bs)
          if (yt) {
            const St = D.find((Ie) => Ie.type === ls.TOOL_FORMER)
            St && St.clearSessionId()
          }
          ri && this.composerUtilsService.removeMessagesAfterBubble(e, ri),
            A
              ? (this.composerDataService.updateComposerBubble(e, _e, {
                  ...HC(),
                  bubbleId: _e,
                  richText: s?.richText ?? t,
                  text: t,
                  userResponsesToSuggestedCodeBlocks: P,
                  isCapabilityIteration: s?.isCapabilityIteration,
                  existedSubsequentTerminalCommand: yt,
                  existedPreviousTerminalCommand: je,
                  humanChanges: E,
                  attachedHumanChanges: l.context.useRecentChanges,
                }),
                console.log(
                  `[composer.submitChat] Time between function start and adding human message: ${Date.now() - n}ms`,
                ))
              : this.composerDataService.updateComposerBubble(e, _e, {
                  existedSubsequentTerminalCommand: yt,
                  existedPreviousTerminalCommand: je,
                  humanChanges: E,
                  attachedHumanChanges: l.context.useRecentChanges,
                })
        }
        if (s?.skipAddNewHumanMessage || A) {
          const _e = this.composerDataService.getLastHumanBubble(e)
          if (!_e)
            throw new Error(
              "[composer] submitted capability iteration without a last human message!",
            )
          m = _e
        } else
          (m = {
            ...HC(),
            richText: s?.richText ?? t,
            text: t,
            userResponsesToSuggestedCodeBlocks: P,
            isCapabilityIteration: s?.isCapabilityIteration,
            tokenDetailsUpUntilHere: l.tokenDetails,
            tokenCountUpUntilHere: l.tokenCount,
          }),
            this.composerDataService.updateComposerDataSetStore(e, (_e) =>
              _e("conversation", [...l.conversation, m]),
            ),
            console.log(
              `[composer.submitChat] Time between function start and adding human message: ${Date.now() - n}ms`,
            )
        let F = u2(l.context)
        if (
          ((this.shouldIgnoreTokenCountUpdate = true),
          s?.isCapabilityIteration ||
            (L && this.clearText(e), this.composerViewsService.focus(e, true)),
          s?.bubbleId !== undefined)
        ) {
          const _e = this.composerDataService.getComposerBubble(e, s.bubbleId)
          if (_e && _e.context) {
            const Nt = _e.context
            ;(F = u2(Nt)),
              (P = [...(_e.userResponsesToSuggestedCodeBlocks ?? [])])
            const ni = RUi(u2(Nt))
            this.updateComposer(e, { context: ni })
          }
        }
        this.composerDataService.updateComposerDataSetStore(e, (_e) =>
          _e("currentBubbleId", undefined),
        ),
          this.composerDataService.updateComposerDataSetStore(e, (_e) =>
            _e("latestCheckpoint", undefined),
          )
        const H = {
          ...F,
          usesCodebase:
            F.usesCodebase !== undefined && F.usesCodebase !== false
              ? F
              : s?.usesCodebase,
          useDiffReview: F.useDiffReview ?? s?.useDiffReview,
        }
        if (
          !s?.isCapabilityIteration &&
          !s?.isResume &&
          (this.removeNonPersistentContext(e), o)
        ) {
          this.removeAllListContext({
            composerId: e,
            contextType: "fileSelections",
            addToUndoRedo: false,
          })
          const _e = this.getCurrentFile()
          _e !== undefined &&
            F.fileSelections.some(
              (Nt) => vp("fileSelections", Nt) === vp("fileSelections", _e),
            ) &&
            this.resetContext(e)
        }
        if (!s?.isResume) {
          const _e = await this.composerUtilsService.createCurrentCheckpoint(e)
          this.composerDataService.updateComposerBubble(e, m.bubbleId, {
            checkpoint: _e,
            context: H,
          })
        }
        ;(this.shouldIgnoreTokenCountUpdate = false),
          this.updateTokenCountOfCurrentComposer(),
          console.log(
            `[composer.submitChat] Time between function start and handling context / checkpoints: ${Date.now() - n}ms`,
          )
        const B = await this.aiService.aiClient()
        let z
        const K = H.fileSelections.map((_e) => $I(_e)),
          Q = o ? [] : Object.keys(l.codeBlockData),
          he = (
            await Promise.all(
              (
                await Promise.all(
                  Array.from(new Set([...K, ...Q])).map(async (_e) => ({
                    uri: _e,
                    exists: await this.fileService.exists(U.parse(_e)),
                  })),
                )
              )
                .filter((_e) => _e.exists)
                .map((_e) => _e.uri),
            )
          ).map((_e) => ({ uri: U.parse(_e), fileName: bs(_e) }))
        if (
          ((y = { ...H, fileSelections: he }),
          (a || y.usesCodebase) &&
            this.reactiveStorageService.applicationUserPersistentStorage
              .checklistState?.doneCommandEnter !== true)
        ) {
          const _e =
            this.reactiveStorageService.applicationUserPersistentStorage
              .checklistState
          this.reactiveStorageService.setApplicationUserPersistentStorage(
            "checklistState",
            (Nt) => ({ ...(Nt ?? {}), doneCommandEnter: true }),
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
              await this.composerUtilsService.runCapabilitiesForProcess(
                e,
                "before-submit-chat",
                {
                  composerId: e,
                  humanBubbleId: m.bubbleId,
                  isCapabilityIteration: s?.isCapabilityIteration,
                  contextUsed: y,
                  submitChatProps: { text: t, extra: s },
                },
              )
            )
              return
          } catch (_e) {
            console.error(
              "[composer] error running capabilities for before-submit-chat",
              _e,
            )
            return
          }
        if (
          (this.updateComposer(e, {
            currentBubbleId: undefined,
            editingBubbleId: undefined,
          }),
          l.chatGenerationUUID)
        ) {
          const _e = l.chatGenerationUUID
          this.updateComposer(e, { chatGenerationUUID: undefined }),
            this._skipHandleAbortChat.add(e),
            this.abortGenerationUUID(_e),
            await new Promise((Nt) => setTimeout(Nt, 50)),
            this._skipHandleAbortChat.delete(e)
        }
        ;(h = this.aiService.registerNewGeneration({
          generationUUID: p,
          metadata: o
            ? {
                type: "chat",
                tabId: l.composerId,
                bubbleId: m.bubbleId,
                chatType: "chat",
              }
            : { type: "composer", textDescription: t },
        })[1]),
          this.updateComposer(e, {
            chatGenerationUUID: p,
            latestChatGenerationUUID: p,
            generatingBubbleIds: [],
            status: "generating",
            lastUpdatedAt: Date.now(),
          })
        const ae = l.conversation.at(-1),
          de =
            s?.isResume && ae?.type === fs.AI && ae?.capabilityType === undefined
        if (de) {
          if (!ae)
            throw new Error(
              "[composer] submitted capability iteration without a last ai message!",
            )
          b = ae
        } else
          b = {
            ...HC(),
            codeBlocks: [],
            type: fs.AI,
            text: "",
            isThought: s?.isThought,
            isCapabilityIteration: s?.isCapabilityIteration,
            timingInfo: { clientStartTime: n, clientRpcSendTime: Date.now() },
          }
        const Ee = this.isUsingAPIKeys(e),
          ke = this.cursorAuthenticationService.membershipType()
        if (
          Ee &&
          !o &&
          ke === _n.FREE &&
          this.cursorAuthenticationService.isAuthenticated()
        ) {
          const _e = { status: "aborted" }
          de || (_e.conversation = [...l.conversation, b]),
            this.updateComposer(e, _e),
            this.composerDataService.updateComposerDataSetStore(e, (Nt) =>
              Nt(
                "conversation",
                (ni) => ni.bubbleId === b.bubbleId,
                "errorDetails",
                {
                  generationUUID: p,
                  error: new sG({
                    error: Er.UNSPECIFIED,
                    details: {
                      title: "Cursor Pro Required",
                      detail:
                        "Composer relies on custom models that cannot be billed to an API key. Please disable API keys and use a Pro or Business subscription.",
                    },
                  }),
                  message:
                    "Composer relies on custom models that cannot be billed to an API key. Please disable API keys and use a Pro or Business subscription.",
                  rerun: w,
                },
              ),
            )
          return
        }
        const Ae = Date.now(),
          Pe = new Set([
            ...Object.keys(l.codeBlockData ?? {}),
            ...he.map((_e) => _e.uri.toString()),
          ]),
          ze = Array.from(Pe).map((_e) => U.parse(_e)),
          at = x(
            o
              ? Promise.resolve([])
              : this.selectedContextService.getLinterErrorsForFiles(ze),
            "getPerMessageLinterErrors",
          ),
          we = x(
            this.selectedContextService.getCodeChunks(
              { ...y, folderSelections: a ? [] : y.folderSelections },
              { worktreePath: l.backgroundInfo?.worktreePath },
            ),
            "getCodeChunks",
          ),
          vt = x(
            this.composerDataService.getRelevantFiles(e),
            "getRelevantFiles",
          ),
          lt = x(this.getEnvironmentInfo(), "getEnvironmentInfo"),
          Xe = x(
            o
              ? Promise.resolve({
                  recentlyViewedFiles: [],
                  recentLocationsHistory: [],
                })
              : this.composerUtilsService.getRecentlyViewedFileInfo(we),
            "getRecentlyViewedFileInfo",
          ),
          [Oe, Fe, ut, Ue, Ke] = await Promise.all([at, we, vt, Xe, lt])
        console.log(
          `[composer.submitChat] Time taken to process context: ${Date.now() - Ae}ms`,
        ),
          (z = Oe),
          this.composerDataService.updateComposerDataSetStore(e, (_e) =>
            _e("conversation", (Nt) => Nt.bubbleId === m.bubbleId, {
              attachedCodeChunks: o ? [] : Fe,
              relevantFiles: [
                ...ut.map((Nt) =>
                  this.workspaceContextService.asRelativePath(U.revive(Nt.uri)),
                ),
              ],
              multiFileLinterErrors: [
                ...z.map((Nt) => new Cf({ ...Nt, fileContents: undefined })),
              ],
              ...Ue,
              humanChanges: E,
              attachedHumanChanges: H.useRecentChanges,
              isAgentic: a,
            }),
          )
        const mt = wf(l.conversation).map((_e) => ({ ..._e }))
        if (o) {
          const _e = mt.findIndex((Nt) => Nt.bubbleId === m.bubbleId)
          mt[_e].attachedCodeChunks = Fe
        }
        const Mi =
          await this.composerUtilsService.populateCodeChunksInConversation(
            mt,
            o,
          )
        let qe = Mi
        o ||
          (qe =
            await this.composerUtilsService.populateRedDiffsInConversation(Mi))
        for (const _e of qe)
          this.composerDataService.updateComposerDataSetStore(e, (Nt) =>
            Nt(
              "conversation",
              (ni) => ni.bubbleId === _e.bubbleId,
              "diffsForCompressingFiles",
              _e.diffsForCompressingFiles,
            ),
          )
        this.updateComposer(e, { userResponsesToSuggestedCodeBlocks: [] })
        let Be = ""
        const Ge = Date.now(),
          Et =
            await this.composerUtilsService.populateConversationWithExtraContext(
              qe,
              e,
              {
                lastBubbleContext: y,
                removeContext: (_e) =>
                  this.removeContext({ ..._e, composerIdOrHandle: e }),
              },
            )
        console.log(
          `[composer] Time taken to process extra context: ${Date.now() - Ge}ms`,
        ),
          await (async () => {
            if (h.signal.aborted) return
            const _e = Date.now()
            try {
              const Nt = Et
              let ni = r === "chat" ? "regular-chat" : "composer"
              this.composerUnificationService.reactiveUnificationMode() !==
                "disabled" && (ni = "composer")
              const ri = this.getModelDetails(ni)
              s?.modelOverride && (ri.modelName = s.modelOverride)
              let dn = await this.aiService.getCurrentFileInfo()
              const xi = await this.repositoryService.getNewRepoInfo()
              let Bs
              xi &&
                this.repositoryService.isIndexedMainLocalRepository() &&
                (Bs = new rl(xi))
              const yt = [...Nt]
                  .reverse()
                  .map((ct) => ct.conversationSummary)
                  .filter((ct) => ct !== undefined)[0],
                je = yt?.clientShouldStartSendingFromInclusiveBubbleId
              let St = je
                ? Nt.findIndex(
                    (ct) => (ct.serverBubbleId ?? ct.bubbleId) === je,
                  )
                : 0
              St === -1 && (St = 0)
              const Ie = Nt.slice(St)
              if (o) {
                y.fileSelections.some(
                  (_t) =>
                    this.workspaceContextService.asRelativePath(
                      U.revive(_t.uri),
                    ) === dn?.relativeWorkspacePath,
                ) || (dn = undefined)
                const ct = new Map()
                Ie.forEach((_t, fi) => {
                  _t.type === fs.HUMAN &&
                    ((_t.attachedCodeChunks = _t.attachedCodeChunks.filter(
                      (ln) =>
                        ln.startLineNumber !== 1 ||
                        ln.relativeWorkspacePath !== dn?.relativeWorkspacePath,
                    )),
                    _t.attachedCodeChunks.forEach((ln) => {
                      if (ln.startLineNumber === 1)
                        if (!ct.has(ln.relativeWorkspacePath))
                          ct.set(ln.relativeWorkspacePath, {
                            firstMentionIndex: fi,
                            lastMentionIndex: fi,
                          })
                        else {
                          const Kn = ct.get(ln.relativeWorkspacePath)
                          Kn &&
                            Kn.lastMentionIndex < fi &&
                            (Kn.lastMentionIndex = fi)
                        }
                    }))
                }),
                  Ie.forEach((_t, fi) => {
                    _t.type === fs.HUMAN &&
                      _t.attachedCodeChunks.forEach((ln) => {
                        if (ln.startLineNumber !== 1) return
                        const Kn = ct.get(ln.relativeWorkspacePath)
                        if (
                          Kn !== undefined &&
                          fi === Kn.firstMentionIndex &&
                          Kn.firstMentionIndex !== Kn.lastMentionIndex
                        ) {
                          const er = Ie.at(
                            Kn.lastMentionIndex,
                          )?.attachedCodeChunks
                          er &&
                            (ln.lines =
                              er.find(
                                (gr) =>
                                  ln.relativeWorkspacePath ===
                                  gr.relativeWorkspacePath,
                              )?.lines ?? ln.lines)
                        }
                      })
                  }),
                  Ie.forEach((_t, fi) => {
                    _t.type === fs.HUMAN &&
                      (_t.attachedCodeChunks = _t.attachedCodeChunks.filter(
                        (ln) => {
                          if (
                            ln.startLineNumber !== 1 ||
                            ln.intent === ev.MENTIONED_FILE ||
                            (ln.intent === ev.COMPOSER_FILE &&
                              Ie.slice(0, fi)
                                .reverse()
                                .find((Tr) => Tr.type === fs.HUMAN)
                                ?.attachedCodeChunks.some(
                                  (Tr) =>
                                    Tr.relativeWorkspacePath ===
                                      Tr.relativeWorkspacePath &&
                                    (Tr.intent === ev.MENTIONED_FILE ||
                                      Tr.intent === ev.COMPOSER_FILE),
                                ) === undefined)
                          )
                            return true
                          const Kn = ct.get(ln.relativeWorkspacePath)
                          return !(Kn !== undefined && fi !== Kn.firstMentionIndex)
                        },
                      ))
                  })
              }
              const Dt = {
                conversation: Ie,
                fullConversationHeadersOnly: Nt.map((ct) => ({
                  bubbleId: ct.bubbleId,
                  type: ct.type,
                  serverBubbleId: ct.serverBubbleId,
                })),
                conversationSummary: yt,
                allowLongFileScan: true,
                explicitContext: await this.aiService.getExplicitContext(),
                documentationIdentifiers: (y.selectedDocs ?? []).map(
                  (ct) => ct.docId,
                ),
                quotes: y.quotes ?? [],
                canHandleFilenamesAfterLanguageIds: true,
                modelDetails: ri,
                multiFileLinterErrors: [],
                useWeb: y.useWeb ? "full_search" : undefined,
                externalLinks: y.externalLinks ?? [],
                diffsForCompressingFiles: [],
                compressEdits: true,
                shouldCache:
                  this.reactiveStorageService.applicationUserPersistentStorage
                    .cacheComposerPrompts,
                currentFile: dn,
                fileDiffHistories: [],
                useNewCompressionScheme: true,
                additionalRankedContext: [],
                isChat: (o && !a) ?? false,
                conversationId: l.composerId,
                repositoryInfo: Bs,
                repositoryInfoShouldQueryStaging: this.cursorCredsService
                  .getRepoBackendUrl()
                  .includes("dev-staging.cursor.sh"),
                environmentInfo: Ke,
                isAgentic: a,
                linterErrors:
                  o && y.useLinterErrors
                    ? await J9i(
                        this.markerService,
                        this.workspaceContextService,
                        this.aiService,
                      )
                    : undefined,
                supportedTools:
                  await this.toolsV2HandlerRegistryService.getAvailableTools(
                    l,
                    o,
                  ),
                enableYoloMode:
                  this.reactiveStorageService.applicationUserPersistentStorage
                    .composerState.useYoloMode ?? false,
                yoloPrompt:
                  this.reactiveStorageService.applicationUserPersistentStorage
                    .composerState.yoloPrompt ?? "",
                useUnifiedChatPrompt:
                  this.applicationComposerSettings.unification6 === "wochat",
                mcpTools: await this.mcpService.getToolsForComposer(),
                useFullInputsContext:
                  !this.reactiveStorageService.applicationUserPersistentStorage
                    .fullContextOptions.compress,
                isResume: s?.isResume,
                allowModelFallbacks:
                  this.reactiveStorageService.applicationUserPersistentStorage
                    .allowModelFallbacks,
                numberOfTimesShownFallbackModelWarning:
                  this.reactiveStorageService.applicationUserPersistentStorage
                    .numberOfTimesShownFallbackModelWarning ?? 0,
              }
              console.log("[composer] composerChatRequest", Dt)
              let Mt
              if (
                !this.shouldSkipCapabilities(
                  s?.capabilityProcessesToSkip,
                  "mutate-request",
                )
              )
                try {
                  await this.composerUtilsService.runCapabilitiesForProcess(
                    e,
                    "mutate-request",
                    {
                      composerId: e,
                      humanBubbleId: m.bubbleId,
                      isCapabilityIteration: s?.isCapabilityIteration,
                      contextUsed: y,
                    },
                    { request: Dt },
                  )
                } catch (ct) {
                  if (ct instanceof du) Mt = ct
                  else {
                    console.error(
                      "[composer] error running capabilities for mutate-request",
                      ct,
                    )
                    return
                  }
                }
              if (
                ((b.capabilitiesRan =
                  this.composerDataService.getComposerBubble(
                    e,
                    m.bubbleId,
                  )?.capabilitiesRan),
                h.signal.aborted)
              )
                return
              const ki = await this.chatClient.get(),
                Ii = new vVe(Dt)
              let Bn
              if (Mt !== undefined)
                Bn = (async function* () {
                  throw Mt
                })()
              else if (o && !a)
                y.usesCodebase
                  ? (Bn = B.streamChatContext(Dt, {
                      signal: h.signal,
                      headers: wn(p),
                    }))
                  : (Bn = B.streamChat(Dt, {
                      signal: h.signal,
                      headers: wn(p),
                    }))
              else if (a) {
                const ct = new _cs(6e5)
                ct.push(
                  new Q9({
                    request: { case: "streamUnifiedChatRequest", value: Dt },
                  }),
                )
                const _t = ki.streamUnifiedChatWithTools(ct, {
                  signal: h.signal,
                  headers: wn(p),
                })
                Bn = this.toolV2Service.toolWrappedStream(ct, _t, h, {
                  composerId: e,
                })
              } else
                y.usesCodebase
                  ? (Bn = B.streamComposerContext(Dt, {
                      signal: h.signal,
                      headers: wn(p),
                    }))
                  : (Bn = ki.streamUnifiedChat(Ii, {
                      signal: h.signal,
                      headers: wn(p),
                    }))
              const jr = {
                generatingBubbleIds: [
                  ...(l.generatingBubbleIds ?? []),
                  b.bubbleId,
                ],
                status: "generating",
              }
              de || (jr.conversation = [...l.conversation, b]),
                this.updateComposer(e, jr)
              let $e = N1(Bn)
              const be = this.composerUtilsService.handleStreamComposer({
                streamer: this.composerUtilsService.intermediateChunkMiddleware(
                  $e,
                  e,
                  b.bubbleId,
                ),
                abortController: h,
                generationUUID: p,
                composerId: e,
                startTime: n,
              })
              this._onDidSendRequest.fire(),
                (async () => {
                  await this.aiFeatureStatusService
                    .maybeRefreshFeatureStatus("keepComposerCacheWarm")
                    .catch(() => {}),
                    this.aiFeatureStatusService.getCachedFeatureStatus(
                      "keepComposerCacheWarm",
                    ) &&
                      (await this.debouncedMaybeKeepComposerCacheWarm(
                        e,
                        p,
                        new jB(Dt),
                      ))
                })().catch((ct) => {})
              const We = this.aiService.streamResponse({
                  modelDetails: ri,
                  generationUUID: p,
                  streamer: be,
                  streamerURL:
                    Va.typeName + "/" + Va.methods.streamComposer.name,
                  source: "composer",
                  rethrowCancellation: true,
                  failSilently: false,
                }),
                kt = await this.composerUtilsService.runCapabilitiesForProcess(
                  e,
                  "process-stream",
                  {
                    composerId: e,
                    humanBubbleId: m.bubbleId,
                    aiBubbleId: b.bubbleId,
                    stream: We,
                    generationUUID: p,
                    startTime: n,
                    submitChatProps: { text: t, extra: s },
                  },
                ),
                qt =
                  this.reactiveStorageService.applicationUserPersistentStorage
                    .composerState.selectedFakeStreamerId,
                Yi = qt ? hxr.find((ct) => ct.id === qt) : undefined,
                Ji = Yi ? Z1r(Yi)() : kt,
                Us = this.processCodeBlocks(e, Ji, {
                  skipRegisteringCodeBlocks: s?.skipRegisteringCodeBlocks,
                  skipOnSettled: this.shouldSkipCapabilities(
                    s?.capabilityProcessesToSkip,
                    "composer-settled",
                  ),
                  isCapabilityIteration: s?.isCapabilityIteration,
                  passTimingInfo: true,
                  forceIsNotApplied: s?.isAsk ? true : undefined,
                })
              console.log(`[composer] Client-side ttft: ${Date.now() - n}ms`),
                console.log(
                  `[composer.submitChat] Last leg time taken: ${Date.now() - _e}ms`,
                )
              let Mn,
                Nn = b.text,
                Ei = ""
              for await (const ct of Us) {
                const _t = this.composerDataService.getLastAiBubbleId(e)
                if (!_t) throw new Error("[composer] No ai bubble id")
                if (
                  (Mn !== _t &&
                    ((Mn = _t),
                    (Nn =
                      this.composerDataService.getComposerBubble(e, _t)?.text ??
                      "")),
                  (g = true),
                  ct.timingInfo)
                ) {
                  b.timingInfo &&
                    this.composerDataService.updateComposerDataSetStore(
                      e,
                      (er) => {
                        er(
                          "conversation",
                          (gr) => gr.bubbleId === _t,
                          "timingInfo",
                          (gr) => {
                            const Tr = ct.timingInfo
                            if (!(!Tr || !gr))
                              return {
                                ...gr,
                                serverStartTime: Tr.serverStartTime,
                                serverFirstTokenTime: Tr.serverFirstTokenTime,
                                serverRequestSentTime: Tr.serverRequestSentTime,
                                serverEndTime: Tr.serverEndTime,
                              }
                          },
                        )
                      },
                    )
                  continue
                }
                if (
                  this.reactiveStorageService.nonPersistentStorage.composerState
                    .shouldSimulateServerError
                )
                  throw (
                    (console.log("[composer] Simulating server error"),
                    new du("Simulated server error"))
                  )
                if (
                  this.reactiveStorageService.nonPersistentStorage.composerState
                    .shouldSimulateTimeoutServerErrorOnce
                ) {
                  console.log("[composer] Simulating timeout server error")
                  const er = new du(
                    "Simulated timeout server error",
                    Tg.DeadlineExceeded,
                    undefined,
                    [new sG({ error: Er.TIMEOUT })],
                  )
                  throw (
                    (this.reactiveStorageService.setNonPersistentStorage(
                      "composerState",
                      "shouldSimulateTimeoutServerErrorOnce",
                      false,
                    ),
                    er)
                  )
                }
                const { text: fi } = ct
                if (!fi) {
                  ct.isBigFile &&
                    this.updateComposer(e, { isReadingLongFile: true })
                  continue
                }
                l?.isReadingLongFile &&
                  this.updateComposer(e, { isReadingLongFile: false })
                const ln = (er) => {
                  ;(Nn += er),
                    (Be += er),
                    this.composerDataService.updateComposerDataSetStore(
                      e,
                      (gr) =>
                        gr(
                          "conversation",
                          (Tr) => Tr.bubbleId === _t,
                          "text",
                          Nn,
                        ),
                    )
                }
                let Kn = s?.isResume
                if (Kn) {
                  const er = Ei + fi
                  if (Nn.includes(er)) {
                    Ei = er
                    continue
                  } else if (Ei !== "") {
                    const gr = Nn.lastIndexOf(Ei),
                      Tr = Nn.slice(gr + Ei.length)
                    let pn = fi
                    fi.startsWith(Tr)
                      ? (pn = fi.slice(Tr.length))
                      : (Nn = Nn.slice(0, gr + Ei.length)),
                      ln(pn),
                      (Kn = false)
                    continue
                  } else {
                    let gr = ""
                    for (let Tr = 0; Tr < Nn.length; Tr++) {
                      let pn = Nn.slice(-Tr - 1)
                      if (fi.startsWith(pn)) gr = pn
                      else break
                    }
                    ln(fi.slice(gr.length)), (Kn = false)
                    continue
                  }
                  Kn = false
                } else ln(fi)
              }
              ;(d = true), (this._recentlyResumed = false)
            } catch (Nt) {
              if (
                (console.error("[composer] Error in AI response:", Nt),
                Nt instanceof du && !this._recentlyResumed)
              ) {
                const ni = dP(Nt)
                if (ni && ni.error === Er.TIMEOUT) {
                  ;(this._recentlyResumed = true), this.resumeChat(e, s)
                  return
                }
              }
              ;(this._recentlyResumed = false),
                (u = true),
                this.composerDataService.setGeneratingCodeBlocksToAborted(e),
                this.composerDataService.setGeneratingCapabilitiesToAborted(e),
                this.composerDataService.setGeneratingCapabilityCodeBlocksToAborted(
                  e,
                ),
                C(Nt)
            }
          })()
      } catch (x) {
        ;(u = true),
          console.error("[composer] submitChatMaybeAbortCurrent errored!", x)
      } finally {
        const x = h.signal.aborted || l?.status === "aborted"
        m && x && this.handleAbortChat(e, m.bubbleId),
          !g && !x && C(new du("No response from model")),
          p && this.abortGenerationUUID(p)
        let k
        const E = []
        if (b) {
          const P = l.conversation.findIndex((L) => L.bubbleId === b.bubbleId)
          for (let L = P; L > -1 && L < l.conversation.length; L++) {
            const A = l.conversation[L]
            if (A.type === fs.AI) E.push(A.bubbleId), (k = A.bubbleId)
            else break
          }
        }
        const D =
          l.chatGenerationUUID !== undefined &&
          this.isActiveGeneration(l.chatGenerationUUID)
        if (
          (this.updateComposer(e, {
            generatingBubbleIds:
              l?.generatingBubbleIds?.filter((P) => !E.includes(P)) ?? [],
            chatGenerationUUID: D ? l.chatGenerationUUID : undefined,
          }),
          !d || !g || u || l?.status === "aborted"
            ? (console.error("[composer] Failed to get complete AI response"),
              l?.conversation.length
                ? this.updateComposer(e, { status: "aborted" })
                : this.updateComposer(e, { status: "none" }))
            : this.updateComposer(e, { status: "completed" }),
          !this.shouldSkipCapabilities(
            s?.capabilityProcessesToSkip,
            "after-submit-chat",
          ) &&
            l.status !== "aborted" &&
            k &&
            m)
        )
          try {
            await this.composerUtilsService.runCapabilitiesForProcess(
              e,
              "after-submit-chat",
              {
                composerId: e,
                humanBubbleId: m.bubbleId,
                aiBubbleId: k,
                isCapabilityIteration: s?.isCapabilityIteration,
              },
            )
          } catch (P) {
            console.error(
              "[composer] error running capabilities for after-submit-chat",
              P,
            ),
              this.updateComposer(e, { status: "aborted" })
          }
        if (
          (s?.onFinish?.(),
          this.reactiveStorageService.applicationUserPersistentStorage
            .checklistState?.doneCommandL !== true)
        ) {
          const P =
            this.reactiveStorageService.applicationUserPersistentStorage
              .checklistState
          this.reactiveStorageService.setApplicationUserPersistentStorage(
            "checklistState",
            (L) => ({ ...(L ?? {}), doneCommandL: true }),
          )
        }
        if (
          this.reactiveStorageService.applicationUserPersistentStorage
            .checklistState?.doneAddingCodeSelection !== true &&
          (y.fileSelections.length > 0 || y.selections.length > 0)
        ) {
          const P =
            this.reactiveStorageService.applicationUserPersistentStorage
              .checklistState
          this.reactiveStorageService.setApplicationUserPersistentStorage(
            "checklistState",
            (L) => ({ ...(L ?? {}), doneAddingCodeSelection: true }),
          )
        }
        this.shouldSkipCapabilities(
          s?.capabilityProcessesToSkip,
          "composer-settled",
        ) || this.maybeRunOnComposerSettled(e),
          await this.renameComposer(e),
          this.updateComposerSummaryIfOutdated(e),
          b &&
            b.timingInfo &&
            this.composerDataService.updateComposerDataSetStore(e, (P) =>
              P(
                "conversation",
                (L) => L.bubbleId === b.bubbleId,
                "timingInfo",
                (L) => {
                  if (L)
                    return {
                      ...L,
                      clientSettleTime: Date.now(),
                      clientEndTime: Date.now(),
                    }
                },
              ),
            )
      }
    }
    async warmFastApply(e, t) {
      const s = this.getComposer(e),
        n = this.composerDataService.getComposerForceMode(e)
      if (!s) {
        console.error("[composer] No composer found for warmFastApply")
        return
      }
      if (!this.composerDataService.getComposerCodeBlock(e, t.uri, t.version)) {
        console.error(
          "[composer] No reactive code block found for warmFastApply",
        )
        return
      }
      if (!this.composerDataService.getLastHumanBubble(e)) {
        console.error("[composer] No last user message found for warmFastApply")
        return
      }
      if (!(await this.fileService.exists(t.uri))) return
      let a
      n === "chat"
        ? (a = nm.CACHED_APPLY)
        : (a = this.composerUtilsService.isAgenticComposer(e)
            ? nm.COMPOSER_AGENT
            : nm.COMPOSER)
      try {
        await this.fastEditService.warmFastApply({
          uri: t.uri,
          conversationHistory:
            this.composerUtilsService.processConversationForFastEdit(
              e,
              s.conversation,
              t,
            ),
          generationUUID: rt(),
          source: a,
        })
      } catch (l) {
        console.error("[composer] Error in warmFastApply:", l)
      }
    }
    handleAbortChat(e, t) {
      const s = this.getComposer(e)
      if (!s || this._skipHandleAbortChat.has(e)) return
      const n = this.composerDataService.getComposerBubble(e, t),
        r = s.conversation.findIndex((c) => c.bubbleId === t)
      if (!n || t !== this.composerDataService.getLastHumanBubbleId(e)) return
      const o = s.conversation
        .slice(r + 1)
        .filter((c) => c.type === fs.AI)
        .map((c) => this.composerDataService.getComposerBubble(e, c.bubbleId))
        .filter(bn)
      if (
        o.some((c) =>
          (c.codeBlocks ?? [])
            .map((u) =>
              this.composerDataService.getComposerCodeBlock(
                e,
                u.uri,
                u.version,
              ),
            )
            .filter(bn)
            .some((u) => u.status !== "generating" && u.status !== "aborted"),
        )
      )
        return
      if (o.every((c) => c.text.length === 0 && c.errorDetails === undefined)) {
        this.composerDataService.updateComposerDataSetStore(e, (d) =>
          d("conversation", (g) => g.slice(0, r)),
        )
        const c = u2(n.context || cm()),
          h = n.text,
          u = n.richText
        this.updateComposer(e, { text: h, richText: u, context: c }),
          this._onShouldForceText.fire({ composerId: e }),
          this.composerViewsService.focus(e, true)
      } else
        s.text.length === 0 &&
          !n.isCapabilityIteration &&
          this.composerDataService.getLastHumanBubbleId(e) === t &&
          (this.updateComposer(e, { editingBubbleId: t }),
          this.composerViewsService.focusPrevBubble(e))
    }
    async runFastApplyOnCodeBlock(e, t, s) {
      const n = this.composerDataService.getCodeBlockStatus(e, t.uri, t.version)
      if (
        (this.composerDataService.setCodeBlockStatus(
          e,
          t.uri,
          t.version,
          "apply_pending",
        ),
        s?.isBackground === true)
      )
        return this._fastApplyQueue.queue(() =>
          this.runFastApplyOnCodeBlockInternal(e, t, {
            ...s,
            cameFromGenerating: n === "generating" || s?.cameFromGenerating,
            isReapply: s?.isReapply,
          }),
        )
      const r = t.uri.toString(),
        o = this.getComposerEditingState(e)
      o.fastApplyQueue[r] || (o.fastApplyQueue[r] = new UE(1))
      const a = o.fastApplyQueue[r].queue(() =>
        this._fastApplyQueue.queue(() =>
          this.runFastApplyOnCodeBlockInternal(e, t, {
            ...s,
            cameFromGenerating: n === "generating" || s?.cameFromGenerating,
            isReapply: s?.isReapply,
          }),
        ),
      )
      return (
        (o.fastApplyRunningMap[r] = true),
        o.fastApplyQueue[r].whenIdle().then(() => {
          ;(o.fastApplyRunningMap[r] = false), delete o.fastApplyQueue[r]
        }),
        a
      )
    }
    async runFastApplyOnCodeBlockInternal(e, t, s) {
      s = { ...(s ?? {}) }
      let n = this.getComposer(e)
      if (!n) {
        console.log("[composer] no state")
        return
      }
      let r = t.uri
      if (
        (r ||
          (n &&
            n.context.fileSelections.length === 1 &&
            (r = U.revive(n.context.fileSelections[0].uri))),
        !r)
      ) {
        console.log("[composer] no path found for codeblock")
        return
      }
      const o = this.composerDataService.getComposerForceMode(e)
      let a = n.codeBlockData?.[r.toString()]?.find((b) => b.isCached)
      for (; a; )
        this.unregisterCachedCodeBlock(e, r, a.version),
          (a = n.codeBlockData?.[r.toString()]?.find((b) => b.isCached))
      const l = t.version,
        c = r.toString()
      console.log("[composer] running fast apply on", c, l),
        this.composerDataService.setCodeBlockStatus(e, r, l, "applying")
      let h = rt()
      const d = !(await this.fileService.exists(r))
      let g = []
      if (d && s?.isBackground !== true)
        g = await this.checkToCreateNewFile(e, r, true)
      else if (d && s?.isBackground === true) return
      this._shouldOpenNextAppliedFile &&
        (this.openerService.open(r, {
          openToSide: false,
          editorOptions: {
            revealIfVisible: true,
            revealIfOpened: true,
            source: Nh.USER,
            preserveFocus: true,
          },
          fromUserGesture: true,
        }),
        (this._shouldOpenNextAppliedFile = false))
      let p = false,
        m = false
      try {
        if (o === "edit") {
          const L = this.composerDataService.getLastBubbleWhere(
              e,
              (F) => !!F.checkpoint,
            ),
            A = L?.checkpoint
          if (L && s?.cameFromGenerating) {
            const F = A?.files.some(
              (B) => B.uri.toString() === t.uri.toString(),
            )
            let H = [" "]
            if (!F) {
              let B
              try {
                ;(B = await this.textModelService.createModelReference(t.uri)),
                  (H = B.object.textEditorModel.getLinesContent())
              } finally {
                B?.dispose()
              }
              const z = await this.composerUtilsService.computeLineDiffs(
                  e,
                  t.uri,
                  H,
                ),
                K = [
                  "conversation",
                  (Q) => Q.bubbleId === L.bubbleId,
                  "checkpoint",
                ]
              A === undefined &&
                !this.isChat(e) &&
                this.composerDataService.updateComposerDataSetStore(e, (Q) =>
                  Q(...K, QWe()),
                ),
                this.composerDataService.updateComposerDataSetStore(e, (Q) =>
                  Q(
                    ...K,
                    One((se) => {
                      se &&
                        (se.files.push({
                          uri: t.uri,
                          originalModelDiffWrtV0: z,
                          isNewlyCreated: d,
                        }),
                        se.newlyCreatedFolders.push(...g))
                    }),
                  ),
                )
            }
          }
        }
        const b = t.content
        let y,
          w = new Promise((L) => {
            y = L
          }),
          C,
          S = 0,
          x = false
        const E =
            (this.composerDataService.getInlineDiff(e, r, l) !== undefined &&
              !t.isChained) ||
            s?.isBackground === true,
          D = async ({
            newModelLines: L,
            originalModelLines: A,
            isChained: F,
          }) => {
            if (!m) {
              if ((console.log("[composer] apply done"), o === "edit")) {
                const [H, B] = await Promise.all([
                    this.composerUtilsService.computeLineDiffs(e, r, L),
                    this.composerUtilsService.computeLineDiffs(e, r, A),
                  ]),
                  z = [
                    { key: "isChained", value: F ?? false },
                    { key: "newModelDiffWrtV0", value: H ?? [] },
                    { key: "originalModelDiffWrtV0", value: B ?? [] },
                  ]
                for (const K of z)
                  this.composerDataService.updateComposerDataSetStore(e, (Q) =>
                    Q("codeBlockData", r.toString(), l, K.key, K.value),
                  )
              }
              ;(x = true), (p = false), y()
            }
          },
          P = () => {
            m ||
              (console.log("[composer] apply failed"), (x = true), (p = true), y())
          }
        for (; S < B4i && !x; ) {
          if (
            (S++,
            S > 0 && ((h = rt()), await new Promise((L) => setTimeout(L, 100))),
            this.isChat(e) &&
              this.composerUnificationService.reactiveUnificationMode() ===
                "disabled")
          ) {
            x = true
            const L = this.getComposer(e)
            if (!L) {
              console.log("[composer] no state")
              return
            }
            const A = s?.overrideUri ?? t.uri
            let F = true
            if (s?.isBackground === true) {
              this.aiApplyToFileActionsService.cacheCodeBlockApplyComposer({
                uri: A,
                codeblock: t.content,
                source: nm.CACHED_APPLY,
                parentRequestId:
                  L?.latestChatGenerationUUID ?? L?.chatGenerationUUID,
                conversationHistory:
                  this.composerUtilsService.processConversationForFastEdit(
                    e,
                    L.conversation,
                    t,
                  ),
                onApplyDone: D,
                onApplyFailed: P,
              })
              return
            } else
              s?.range === undefined &&
                s?.isReapply !== true &&
                (await this.aiApplyToFileActionsService.maybeApplyCachedEntry({
                  uri: A,
                  codeblockContent: t.content,
                  menuString: BP,
                  range: "fullfile",
                  composerMetadata: { composerId: e, version: l },
                })) === "didApply" &&
                ((F = false), (w = Promise.resolve()))
            F &&
              (await this.aiApplyToFileActionsService.applyComposerMaybeWithExistingStreamer(
                {
                  uri: A,
                  codeblock: t.content,
                  source: nm.CLICKED_APPLY,
                  parentRequestId:
                    L?.latestChatGenerationUUID ?? L?.chatGenerationUUID,
                  conversationHistory:
                    this.composerUtilsService.processConversationForFastEdit(
                      e,
                      L.conversation,
                      t,
                    ),
                  isReapply: s?.isReapply ?? false,
                  range: s?.range,
                  onApplyDone: D,
                  onApplyFailed: P,
                  composerMetadata: { composerId: e, version: l },
                },
              ))
          } else {
            const L = this.composerUtilsService.isAgenticComposer(e)
              ? nm.COMPOSER_AGENT
              : nm.COMPOSER
            C = await this.fastEditService.performAndYieldChatEdit({
              skipAddToPromptHistory: true,
              composerMetadata: { composerId: e, version: l },
              conversationHistory:
                this.composerUtilsService.processConversationForFastEdit(
                  e,
                  n.conversation,
                  t,
                ),
              source: L,
              generationUUID: h,
              parentRequestId:
                n?.latestChatGenerationUUID ?? n?.chatGenerationUUID,
              clickedCodeBlockContents: b,
              options: {
                overrideCurrentFileURI: s?.overrideUri ?? r,
                overrideLineRange: s?.range,
                rejectChangesInURI: s?.isBackground === true ? false : undefined,
                rerun: () => {
                  this.reapply(e, r, l)
                },
              },
              shouldChainPrevious: !E,
              linesDiffComputerOptions: Ygs,
              inlineDiffServiceLookalikePure:
                this.getInlineDiffServiceLookalikePure(e, r, l),
              onApplyDone: D,
              onApplyFailed: P,
              isReapply: s?.isReapply,
              cleanUpOnFail: s?.isBackground !== true,
            })
          }
          if (
            (this.composerDataService.updateComposerCodeBlock(
              e,
              t.uri,
              t.version,
              { applyGenerationUUID: h, latestApplyGenerationUUID: h },
            ),
            (m = false),
            C)
          ) {
            if (S !== B4i) {
              let L = f1r
              const A = new Promise((B) => {
                L = () => B(undefined)
              })
              let F
              F = setTimeout(() => {
                L(), (m = true)
              }, _4i)
              const H = new Promise((B) => {
                ;(async () => {
                  if (!C) {
                    B(undefined)
                    return
                  }
                  try {
                    for await (const z of C)
                      clearTimeout(F),
                        (F = setTimeout(() => {
                          L(), (m = true)
                        }, _4i))
                  } catch (z) {
                    console.error("[composer] error in apply stream", z)
                  } finally {
                    B(undefined)
                  }
                })()
              })
              await Promise.race([H, A])
            } else
              try {
                for await (const L of C);
              } catch (L) {
                console.error("[composer] error in apply stream", L)
              }
            S === 0 &&
              m &&
              this.reactiveStorageService.nonPersistentStorage.composerState
                .shouldSimulateApplyHanging &&
              this.reactiveStorageService.setNonPersistentStorage(
                "composerState",
                "shouldSimulateApplyHanging",
                false,
              )
          }
          m
            ? (console.log("[composer] apply timedout", h),
              this.abortGenerationUUID(h))
            : await w
        }
        this.composerDataService.getCodeBlockStatus(e, r, l) !== "outdated" &&
          this.composerDataService.setCodeBlockStatus(e, r, l, "completed"),
          this.shouldCache(e, { uri: r, version: l }) ||
            this._onDidAiEditFile.fire({ path: r, version: l })
      } catch (b) {
        ;(p = true),
          console.error("[composer] error in runFastApplyOnCodeBlock", b)
      } finally {
        p &&
          (this.composerDataService.setCodeBlockStatus(e, r, l, "cancelled"),
          (s.skipOnSettled = true)),
          this.composerDataService.updateComposerDataSetStore(e, (C) =>
            C("codeBlockData", r.toString(), l, "intermediateModelLines", []),
          )
        const b = this.composerDataService.getInlineDiff(e, r, l),
          y = b && b.changes.length === 0
        y && this.inlineDiffService.remove(b.id),
          this.composerDataService.updateComposerCodeBlock(
            e,
            t.uri,
            t.version,
            { applyGenerationUUID: undefined, isNoOp: y },
          ),
          await this.runAfterApply(e, h)
        let w
        try {
          w = await this.textModelService.createModelReference(r)
          const C = w.object.textEditorModel.getValue(),
            S = this.workspaceContextService.asRelativePath(
              w.object.textEditorModel.uri,
            )
          await this.everythingProviderService.onlyLocalProvider?.runCommand(
            l7.ResetModel,
            { relativePath: S, currentModelValue: C, modelVersion: l },
          )
        } finally {
          w?.dispose()
        }
        s?.cameFromGenerating &&
          !s?.skipOnSettled &&
          this.maybeRunOnComposerSettled(e),
          this._onDidFinishApplyingCodeBlock.fire({
            composerId: e,
            uri: r,
            version: l,
          }),
          console.log("[composer] fast apply done", e, c, l)
      }
    }
    async runAfterApply(e, t) {
      const s = this.composerDataService.getLastHumanBubbleId(e),
        n = s ? this.composerDataService.getComposerBubble(e, s) : undefined,
        r = this.composerDataService.getLastBubbleId(e),
        o = this.composerDataService.getLastBubble(e)
      if (!s || !n) {
        console.error(
          "[composer] after apply was run without a previous human bubble",
        )
        return
      }
      if (!r || !o || o.type !== fs.AI) {
        console.error(
          "[composer] after apply was run without a previous ai bubble",
        )
        return
      }
      await this.composerUtilsService.runCapabilitiesForProcess(
        e,
        "after-apply",
        { composerId: e, humanBubbleId: s, aiBubbleId: r },
      )
    }
    async fixLinterErrorWithAI({
      errorMessage: e,
      editorUri: t,
      range: s,
      addToCurrent: n = false,
      forceMode: r,
    }) {
      const o = this.composerDataService.getSelectedIdByForceMode(r),
        a = this._codeEditorService.getActiveCodeEditor()
      if ((this.openComposer(o), !a?.hasModel())) return
      const l = a.getModel()
      if (!l) return
      const c = a.getPosition()
      ;(!c || !s.containsPosition(c)) && a.setPosition(s.getStartPosition())
      const h = Math.max(1, s.startLineNumber - 1),
        u = Math.min(l.getLineCount(), s.endLineNumber + 2),
        d = new G(h, 1, u, l.getLineMaxColumn(u)),
        g = `For the code present, we get this error:
\`\`\`
${e}
\`\`\`
How can I resolve this? If you propose a fix, please make it concise.`
      if (
        this.composerDataService.getLastHumanBubble(o)?.text === g &&
        this.getComposer(o)?.status === "generating"
      )
        return
      n || (await this.createComposer({ forceMode: r }))
      const p = this.composerDataService.getSelectedIdByForceMode(r)
      this.updateComposer(p, { text: g, richText: g })
      const m = await this.getEditorCode(d, a)
      m &&
        this.addContext({
          composerIdOrHandle: p,
          contextType: "selections",
          value: m,
          shouldShowPreview: false,
        }),
        this.addContext({
          composerIdOrHandle: p,
          contextType: "fileSelections",
          value: { uri: U.parse(t) },
          shouldShowPreview: false,
        }),
        this._onShouldForceText.fire({ composerId: p }),
        await this.submitChatMaybeAbortCurrent(p, g)
    }
    async fixBugReport(e, t, s, n) {
      await this.createComposer({ forceMode: n })
      const r = new Set(),
        o = new Set(),
        a = this.composerDataService.getSelectedIdByForceMode(n)
      for (const h of e.locations) {
        const u = this.workspaceContextService.resolveRelativePath(h.file)
        if (!u) {
          console.error("[composer] no uri for", h.file)
          continue
        }
        r.add(u), o.add(h.file)
        const d = t[h.file]
        if (!d) {
          console.error("[composer] no file contents for", h.file)
          continue
        }
        const g = Ggs(h, d, this.workspaceContextService, this.languageService)
        if (!g) {
          console.error("[composer] no selection for", h)
          continue
        }
        this.addContext({
          composerIdOrHandle: a,
          contextType: "selections",
          value: g,
          shouldShowPreview: false,
        }),
          this.addContext({
            composerIdOrHandle: a,
            contextType: "fileSelections",
            value: { uri: u },
            shouldShowPreview: false,
          })
      }
      const l = `Fix this bug in ${Array.from(o)
        .map((h) => `\`${h}\``)
        .join(", ")}:
\`\`\`
${e.description}
\`\`\``
      this.updateComposer(a, { text: l })
      const c = await zgs({
        report: e,
        fileSnapshots: t,
        fileSnapshotsPreDiff: s,
        workspaceContextService: this.workspaceContextService,
        modelService: this.modelService,
        editorWorkerService: this.editorWorkerService,
      })
      c &&
        this.addContext({
          composerIdOrHandle: a,
          contextType: "selections",
          value: c,
          shouldShowPreview: false,
        }),
        await this.submitChatMaybeAbortCurrent(a, l)
    }
    async turnCachedCodeBlockToDiff(e, t, s) {
      const n = this.composerDataService.getComposerCodeBlock(e, t, s)
      !n ||
        n.isCached !== true ||
        (this.unregisterCachedCodeBlock(e, t, s),
        await this.turnApplyToInlineDiff(e, t, s))
    }
    async turnAllCachedCodeBlocksToDiffs(e) {
      if (this._isTurningCachedCodeBlocksToDiffs) {
        console.log(
          "[composer] turnAllCachedCodeBlocksToDiffs is already running, skipping",
        )
        return
      }
      this._isTurningCachedCodeBlocksToDiffs = true
      try {
        const t = this.composerDataService.getComposerFromIdOrHandle(e)
        if (!t) return
        const s = this.composerDataService.getAllCachedCodeBlocks(t.composerId)
        for (const n of s)
          n.status !== "applying" &&
            (await this.turnCachedCodeBlockToDiff(
              t.composerId,
              n.uri,
              n.version,
            ))
      } finally {
        this._isTurningCachedCodeBlocksToDiffs = false
      }
    }
    async turnApplyToInlineDiff(e, t, s, n) {
      const r = this.composerDataService.getComposerCodeBlock(e, t, s)
      if (!r || !r.newModelDiffWrtV0) {
        console.error("[composer] no latest code block for uri", t)
        return
      }
      if (n?.shouldChain) {
        const b = new cb(
          "Undo Chain Diff",
          "undo-chain-diff",
          undefined,
          t,
          () => {},
          () => {},
        )
        this.inlineDiffService.pushUndoElement(b, { breakConsolidation: true })
        const y =
          this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
            (w) => w.uri.toString() === t.toString(),
          )
        if (!y) {
          console.error(
            "[composer] cannot chain apply without prev inline diff",
            t,
          )
          return
        }
        this.inlineDiffService.cancelDiff(y.id),
          this.inlineDiffService.rejectDiff(y.id, {
            close: true,
            rejectSilently: true,
            dontBreakConsolidation: true,
          })
      } else {
        const b =
          this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
            (y) => y.uri.toString() === t.toString(),
          )
        b && this.inlineDiffService.remove(b.id)
      }
      console.log("[composer] turning cached to diff", t, r.status),
        (await this.fileService.exists(t)) ||
          (await this.checkToCreateNewFile(e, t, true))
      let a, l, c, h
      try {
        a = await this.textModelService.createModelReference(t)
        const b = a.object
        if (n?.setOriginalModelLines) {
          const y =
            await this.composerUtilsService.getCodeBlockOriginalModelLines(
              e,
              t,
              s,
              { shouldChain: true },
            )
          y &&
            b.textEditorModel.setValue(
              y.join(`
`),
            )
        }
        ;(l = b.textEditorModel.getLineCount()),
          (c = { startLineNumber: 1, endLineNumberExclusive: l + 1 }),
          (h = b.textEditorModel
            .getLinesContent()
            .slice(c.startLineNumber - 1, c.endLineNumberExclusive - 1))
      } finally {
        a?.dispose()
      }
      const u = rt(),
        d = {
          uri: t,
          generationUUID: u,
          currentRange: c,
          originalTextLines: h,
          prompt: "hi2",
          isHidden: false,
          attachedToPromptBar: false,
          source: OP,
          createdAt: Date.now(),
          composerMetadata: { composerId: e, version: s },
        },
        p = (await this.inlineDiffService.addActiveDiff(d)).id,
        m = this.composerUtilsService.getCodeBlockNewModelLines(e, t, s)
      if (!m) {
        console.error("[composer] no new model lines for", t, s)
        return
      }
      this.inlineDiffService.addLinesToDiff(p, m),
        this.inlineDiffService.finishDiffSuccess(p),
        this.composerDataService.updateComposerCodeBlock(e, t, s, {
          lastDiffId: p,
        }),
        this.composerDataService.setCodeBlockStatus(
          e,
          t,
          r.version,
          "completed",
        ),
        this._onDidAiEditFile.fire({ path: t, version: r.version })
    }
    async reactivateApplyingCodeBlocks(e) {
      const t = this.composerDataService.getComposerFromIdOrHandle(e)
      if (!t) return
      const s = this.composerDataService.getCodeBlocksOfStatuses(e, "applying")
      for (const n of s)
        n.isCached &&
          (this.composerDataService.doesFileHaveInlineDiff(
            t.composerId,
            n.uri,
          ) ||
            (await this.reactivateApplyingCodeBlock(e, n)))
    }
    async reactivateApplyingCodeBlock(e, t) {
      if (!t || t.status !== "applying") {
        console.error("[composer] no latest code block for", t)
        return
      }
      console.log(
        "[composer] reactivating applying code block",
        t.uri,
        t.status,
      ),
        this.unregisterCachedCodeBlock(e, t.uri, t.version)
      const s = t.uri
      ;(await this.fileService.exists(s)) ||
        (await this.checkToCreateNewFile(e, s, true))
      let r, o, a, l
      try {
        r = await this.textModelService.createModelReference(s)
        const d = r.object
        l = d.textEditorModel.getValue()
        const g = d.textEditorModel.getLineCount()
        ;(o = new Es(1, g + 1)),
          (a = d.textEditorModel
            .getLinesContent()
            .slice(o.startLineNumber - 1, o.endLineNumberExclusive - 1))
      } finally {
        r?.dispose()
      }
      const c = rt(),
        h = {
          uri: s,
          generationUUID: c,
          currentRange: o,
          originalTextLines: a,
          prompt: "hi3",
          isHidden: false,
          attachedToPromptBar: false,
          source: OP,
          createdAt: Date.now(),
          composerMetadata: {
            composerId: typeof e == "string" ? e : e.data.composerId,
            version: t.version,
          },
        },
        u = this.getApplyingDiffsState(
          typeof e == "string" ? e : e.data.composerId,
        )
      u.isReactivatingApplyingDiffs[s.toString()] = true
      try {
        const d = t.intermediateModelLines ?? []
        let g = []
        if (d.length > 0) {
          const b = await this.editorWorkerService.computeLinesDiff(a, d, {
            ignoreTrimWhitespace: false,
            computeMoves: false,
            maxComputationTimeMs: 500,
            ...Ygs,
          })
          let y = b.changes
          b.hitTimeout && (y = [new Qb(o, new Es(1, d.length + 1), undefined)])
          const w = y.map((C) => ({
            original: C.original,
            modified: d.slice(
              C.modified.startLineNumber - 1,
              C.modified.endLineNumberExclusive - 1,
            ),
          }))
          g = this.fastEditService.applyDiffToLines(
            l.split(`
`),
            w,
          )
        }
        if (
          !t.isNotApplied &&
          (this.shouldCache(e, { uri: s, version: t.version }) ||
            u.isReactivatingApplyingDiffs[s.toString()] === false)
        ) {
          ;(u.applyingDiffsBacklogLines[s.toString()] = []),
            (u.isReactivatingApplyingDiffs[s.toString()] = false)
          return
        }
        const m = (await this.inlineDiffService.addActiveDiff(h)).id
        this.inlineDiffService.addLinesToDiff(m, g)
      } catch (d) {
        console.error("[composer] error in reactivateApplyingCodeBlock", d)
      } finally {
        u.isReactivatingApplyingDiffs[s.toString()] = false
      }
    }
    async getEnvironmentInfo() {
      const e =
        await this.everythingProviderService.onlyLocalProvider?.runCommand(
          J1t.GetExtHostInfo,
          null,
        )
      return {
        exthostPlatform: e?.platform,
        exthostArch: e?.arch,
        exthostRelease: e?.release,
        exthostShell: e?.shell,
        localTimestamp: new Date().toISOString(),
        workspaceUris: this.workspaceContextService
          .getWorkspace()
          .folders.map((t) => t.uri.toString()),
      }
    }
    setHorizontalBarSize(e) {
      this.updateWorkspacePersistentState({ horizontalBarSize: e })
    }
    setTabHeight(e) {
      this.updateWorkspacePersistentState({ tabHeight: e })
    }
    getHorizontalBarSize() {
      return (
        this.reactiveStorageService.workspaceUserPersistentStorage.composerState
          ?.horizontalBarSize ?? 520
      )
    }
    getTabHeight() {
      return (
        this.reactiveStorageService.workspaceUserPersistentStorage.composerState
          ?.tabHeight ?? 400
      )
    }
    isComposerEnabled() {
      return this.applicationComposerSettings.isComposerEnabled2
    }
    setIsComposerEnabled(e) {
      this.reactiveStorageService.setApplicationUserPersistentStorage(
        "composerState",
        "isComposerEnabled2",
        e,
      )
    }
    async referenceOpenEditors(e, t) {
      const s = this.editorGroupsService.getGroups(1)
      let n = []
      t
        ? (n = s
            .map((l) => {
              const c = l.activeEditor?.resource
              if (c && this.isCompatibleScheme(c.scheme)) return c
            })
            .filter(bn))
        : (n = s
            .map((l) =>
              l.editors
                .filter(
                  (c) =>
                    c.resource && this.isCompatibleScheme(c.resource.scheme),
                )
                .map((c) => c.resource),
            )
            .flat())
      const r = n.filter(
          (l) => l.scheme !== ce.notepad && l.scheme !== ce.vscodeTerminal,
        ),
        o = n.filter((l) => l.scheme === ce.vscodeTerminal),
        a = n.filter((l) => l.scheme === ce.notepad)
      for (const l of r)
        this.addContextToLastFocused({
          composerIdOrHandle: e,
          contextType: "fileSelections",
          value: { uri: l },
        })
      for (const l of o)
        this.addContextToLastFocused({
          composerIdOrHandle: e,
          contextType: "terminalFiles",
          value: { uri: l },
        })
      for (const l of a)
        this.addContextToLastFocused({
          composerIdOrHandle: e,
          contextType: "notepads",
          value: { notepadId: l.path },
        })
    }
    async shouldComposerAutoApply(e) {
      return this.getComposer(e)
        ? this.composerDataService.getComposerUnifiedMode(e) === "edit"
        : false
    }
    async shouldAutoApplyURI(e, t) {
      return this.getComposer(e)
        ? this.applicationComposerSettings.autoApplyFilesOutsideContext ||
          this.composerDataService
            .getAssociatedFileUris(e)
            .some((r) => r.toString() === t.toString())
          ? true
          : !(await this.fileService.exists(t))
        : false
    }
    isUsingAPIKeys(e) {
      const t =
        this.reactiveStorageService.applicationUserPersistentStorage.aiSettings
          .composerModel ?? "claude-3.5-sonnet"
      return t.toLowerCase().includes("gpt")
        ? this.reactiveStorageService.applicationUserPersistentStorage
            .useOpenAIKey
        : t.toLowerCase().includes("claude")
          ? this.reactiveStorageService.applicationUserPersistentStorage
              .useClaudeKey
          : t.toLowerCase().includes("gemini")
            ? this.reactiveStorageService.applicationUserPersistentStorage
                .useGoogleKey
            : true
    }
    async *processCodeBlocks(e, t, s) {
      let n = null,
        r = false,
        o = "",
        a,
        l,
        c = false,
        h = null,
        u = 0,
        d = 0
      const g = (y, w, C, S) => {
          const x = this.composerDataService.getComposerBubble(e, w)
          if (!x) throw new Error("[composer] Bubble not found")
          h.content += o.slice(0, S)
          const k = x.capabilityCodeBlocks.length - 1
          if (!this.composerDataService.getComposerData(e))
            throw new Error("[composer] Composer not found")
          this.composerDataService.updateComposerCapabilityCodeBlock(e, w, k, {
            content: h.content,
          })
          const D = {
            composerId: e,
            humanBubbleId: C,
            aiBubbleId: w,
            isCapabilityIteration: s?.isCapabilityIteration,
            capabilityCodeBlock: h,
          }
          this.composerUtilsService.runCapabilitiesForProcess(
            e,
            "process-codeblock",
            D,
          ),
            u++,
            (h = null)
        },
        p = async (y, w) => {
          const C = o.slice(0, w)
          if (
            y &&
            y.uri !== undefined &&
            y.version !== undefined &&
            !s?.skipRegisteringCodeBlocks
          ) {
            ;(n.content += C),
              this.composerDataService.updateComposerCodeBlock(
                e,
                n.uri,
                n.version,
                { content: n.content },
              )
            const x = this.composerDataService.getComposerCodeBlock(
              e,
              n.uri,
              n.version,
            )
            ;(n.isNotApplied && x?.status !== "generating") ||
              this.runFastApplyOnCodeBlock(
                e,
                {
                  uri: n.uri,
                  version: n.version,
                  content: n.content,
                  status: "generating",
                },
                {
                  isBackground: n.isNotApplied,
                  skipOnSettled: s?.skipOnSettled,
                },
              )
          }
          u++, (n = null)
        }
      for await (const y of t) {
        const w = this.composerDataService.getLastAiBubbleId(e),
          C = this.composerDataService.getLastHumanBubbleId(e)
        if (!w || !C) throw new Error("[composer] No ai or human bubble id")
        const { text: S } = y
        if (!S) {
          s?.passTimingInfo && y.timingInfo !== undefined && (yield y)
          continue
        }
        for (o += S; o.length > 0; )
          if (r) {
            const x = c && h,
              k =
                n &&
                n.uri !== undefined &&
                n.version !== undefined &&
                !s?.skipRegisteringCodeBlocks
            if (cEt) {
              const F = new RegExp(
                `^(?:\\r?\\n)([\\t ]{${l}})\`{${a}}\\S+`,
              ).exec(o)
              if (F) {
                d++,
                  x
                    ? (h.content += o.slice(0, F.index + F[0].length))
                    : k &&
                      ((n.content += o.slice(0, F.index + F[0].length)),
                      this.composerDataService.updateComposerCodeBlock(
                        e,
                        n.uri,
                        n.version,
                        { content: n.content },
                      )),
                  (o = o.slice(F.index + F[0].length))
                continue
              }
            }
            const E = new RegExp(
                `^(?:\\r?\\n)([\\t ]{${l}})\`{${a}}\\s*(?:\\r?\\n)`,
              ),
              D = /^(?:\r?\n)[\t ]*`*\s*/,
              P = new RegExp(`^(?:\\r?\\n)([\\t ]{${l}})\`{${a}}`),
              L = E.exec(o)
            if (L) {
              if (cEt && d > 0) {
                d--,
                  x
                    ? (h.content += o.slice(0, L.index + L[0].length))
                    : k &&
                      ((n.content += o.slice(0, L.index + L[0].length)),
                      this.composerDataService.updateComposerCodeBlock(
                        e,
                        n.uri,
                        n.version,
                        { content: n.content },
                      )),
                  (o = o.slice(L.index + L[0].length))
                continue
              }
              ;(r = false),
                x ? g(h, w, C, L.index) : n && p(n, L.index),
                (o = o.slice(L.index + L[0].length)),
                (a = undefined),
                (l = undefined),
                (c = false)
            } else {
              const A = D.exec(o),
                F = P.exec(o)
              if ((A && A[0].length === o.length) || F) break
              {
                const H = o.charAt(0)
                x
                  ? (h.content += H)
                  : k &&
                    ((n.content += H),
                    this.composerDataService.updateComposerCodeBlock(
                      e,
                      n.uri,
                      n.version,
                      { content: n.content },
                    )),
                  (o = o.slice(H.length))
              }
            }
          } else {
            const x = /^(\n|\n\n)?[\t ]*```+([^\n]*)\n/,
              k = /^(\n|\n\n)?[\t ]*```+[^\n]*$/,
              E = x.exec(o)
            if (E) {
              r = true
              const D = E[0],
                P = E[2]
              ;(a = /^(\n|\n\n)?(```+)/.exec(D)?.[2]?.length ?? 3),
                (l = /^(\n|\n\n)?([\t ]*)```+/m.exec(D)?.[2]?.length ?? 0)
              let F = "",
                H = null,
                B
              if (P.includes(":")) {
                const K = P.split(":")
                if (
                  K.length === 2 &&
                  ((F = K[0].trim()), (H = K[1].trim()), H.includes("!"))
                ) {
                  const [Q, se] = H.split("!")
                  ;(H = Q), (B = se)
                }
              } else if (P?.includes(".")) {
                if (
                  ((F = P.split(".").pop()?.trim() ?? ""),
                  (H = P),
                  H.includes("!"))
                ) {
                  const [K, Q] = H.split("!")
                  ;(H = K), (B = Q)
                }
              } else F = P?.trim() ?? ""
              const z = xEt.find((K) => K === F)
              if (((o = o.slice(E[0].length)), z))
                (c = true),
                  (h = {
                    type: z,
                    content: "",
                    status: "generating",
                    codeBlockIdx: u,
                    arg: H ?? undefined,
                  }),
                  this.composerDataService.updateComposerDataSetStore(e, (K) =>
                    K(
                      "conversation",
                      (Q) => Q.bubbleId === w,
                      "capabilityCodeBlocks",
                      (Q) => [
                        ...(Q ?? []),
                        {
                          type: z,
                          status: "generating",
                          codeBlockIdx: u,
                          arg: H ?? undefined,
                        },
                      ],
                    ),
                  )
              else if (
                ((n = {
                  language: F,
                  filePath: H,
                  content: "",
                  autoApplyType: B,
                }),
                H)
              ) {
                const K = this.workspaceContextService.resolveRelativePath(H),
                  Q = await this.shouldComposerAutoApply(e),
                  se = await this.shouldAutoApplyURI(e, K)
                if (!s?.skipRegisteringCodeBlocks) {
                  const { languageId: he } =
                    this.languageService.createByLanguageNameOrFilepathOrFirstLine(
                      F ?? "",
                      null,
                      undefined,
                    )
                  let ae = s?.forceIsNotApplied
                  ;(!se || !Q) && (ae = true),
                    ae === undefined &&
                      this.composerUnificationService.reactiveUnificationMode() ===
                        "full" &&
                      (B === "edit" ? (ae = false) : (ae = true))
                  const de = this.registerNewCodeBlock(e, K, n.content, u, {
                    languageId: he,
                    status: "generating",
                    isNotApplied: ae,
                  })
                  this.warmFastApply(e, {
                    uri: de.uri,
                    version: de.version,
                    content: n.content,
                    status: "generating",
                  }),
                    (n.uri = de.uri),
                    (n.version = de.version),
                    (n.isNotApplied = de.isNotApplied)
                }
              }
            } else {
              if (k.exec(o)) break
              {
                const P = o.indexOf(`
`)
                if (P !== -1) o = o.slice(P + 1)
                else break
              }
            }
          }
        yield y
      }
      const m = this.composerDataService.getLastAiBubbleId(e),
        b = this.composerDataService.getLastHumanBubbleId(e)
      if (!m || !b) throw new Error("[composer] No ai or human bubble id")
      if (r) {
        const y = c && h,
          w =
            n &&
            n.uri !== undefined &&
            n.version !== undefined &&
            !s?.skipRegisteringCodeBlocks,
          S = new RegExp(`^(?:\\r?\\n)([\\t ]{${l}})\`{${a}}$`).exec(o)
        S
          ? ((r = false),
            y ? g(h, m, b, S.index) : w && p(n, S.index),
            (o = o.slice(S.index + S[0].length)),
            (a = undefined),
            (l = undefined),
            (c = false))
          : y
            ? this.composerDataService.updateComposerCapabilityCodeBlock(
                e,
                m,
                u,
                { status: "aborted" },
              )
            : w &&
              (this.composerDataService.updateComposerCodeBlock(
                e,
                n.uri,
                n.version,
                { content: n.content },
              ),
              this.composerDataService.setCodeBlockStatus(
                e,
                n.uri,
                n.version,
                "aborted",
              ))
      }
    }
    updateWorkspacePersistentState(e) {
      this.reactiveStorageService.setWorkspaceUserPersistentStorage(
        "composerState",
        {
          ...this.reactiveStorageService.workspaceUserPersistentStorage
            .composerState,
          ...e,
        },
      )
    }
    abortGenerationUUID(e) {
      const t = this.aiService.streamingAbortControllers.get(e)
      t && (t.abort(), this.aiService.streamingAbortControllers.delete(e))
    }
    isActiveGeneration(e) {
      return this.aiService.streamingAbortControllers.has(e)
    }
    removeNonPersistentContext(e) {
      this.removeAllListContext({
        composerId: e,
        contextType: "selectedImages",
        addToUndoRedo: false,
      }),
        this.removeAllListContext({
          composerId: e,
          contextType: "selections",
          addToUndoRedo: false,
        }),
        this.removeAllListContext({
          composerId: e,
          contextType: "terminalSelections",
          addToUndoRedo: false,
        }),
        this.removeAllListContext({
          composerId: e,
          contextType: "externalLinks",
          addToUndoRedo: false,
        }),
        this.removeAllListContext({
          composerId: e,
          contextType: "editTrailContexts",
          addToUndoRedo: false,
        })
    }
    async refreshReactiveContextItemAtStartup() {
      const e = await this.composerDataService.getSelectedComposerHandle()
      try {
        e && this.refreshReactiveContextItem(e.data.composerId)
      } finally {
        e?.dispose()
      }
    }
    refreshReactiveContextItem(e, t, s) {
      const n = this.getComposer(e)
      if (
        !n ||
        (n.hasChangedContext && !s) ||
        !this.selectedContextService.isCursorIgnoreLoaded()
      )
        return
      const r = t
        ? this.composerDataService.getComposerBubble(e, t)?.context
        : n.context
      if (!r) throw new Error("[composer] Context not found")
      const o = this.composerDataService.getComposerForceMode(e),
        a = r.fileSelections,
        l = r.notepads ?? [],
        c = r.terminalFiles ?? [],
        h = r.cursorRules ?? [],
        u = [],
        d = [],
        g = [],
        p = []
      if (o === "edit") {
        const C = this.editorService.getEditors(0),
          S = new Set(C.map((k) => k.groupId)),
          x = Array.from(S)
            .map((k) => this.editorGroupsService.getGroup(k)?.activeEditor)
            .filter(bn)
        for (const k of x)
          if (!(!k?.resource || !this.isCompatibleScheme(k.resource.scheme)))
            if (k.resource.scheme === ce.notepad) {
              const E = k.resource.path
              d.push({ notepadId: E, addedWithoutMention: true, autoContext: true })
            } else if (k.resource.scheme === ce.vscodeTerminal) {
              const E = k.resource
              g.push({ uri: E, addedWithoutMention: true, autoContext: true })
            } else {
              const E = k.resource
              if (E.path?.endsWith(".mdc")) {
                const D = bs(E.path)
                p.push({
                  filename: D,
                  addedWithoutMention: true,
                  autoContext: true,
                })
              } else
                this.selectedContextService.shouldIgnoreUri(E) ||
                  u.push({ uri: E, addedWithoutMention: true, autoContext: true })
            }
      } else if (o === "chat") {
        const S = this.getCurrentFile()?.uri
        if (!S) return
        if (S.scheme === ce.notepad) {
          const x = S.path
          x &&
            d.push({ notepadId: x, addedWithoutMention: true, autoContext: true })
        } else if (S.scheme === ce.vscodeTerminal)
          g.push({ uri: S, addedWithoutMention: true, autoContext: true })
        else if (S.path?.endsWith(".mdc")) {
          const x = bs(S.path)
          p.push({ filename: x, addedWithoutMention: true, autoContext: true })
        } else
          this.selectedContextService.shouldIgnoreUri(S) ||
            u.push({ uri: S, addedWithoutMention: true, autoContext: true })
      }
      a.forEach((C) => {
        u.some((S) => extUri.isEqual(U.revive(S.uri), U.revive(C.uri))) ||
          (this.selectedContextService.getMentions(r, "fileSelections", C)
            .length > 0 &&
            !this.selectedContextService.shouldIgnoreUri(C.uri) &&
            u.push(C))
      }),
        l.forEach((C) => {
          d.some((S) => S.notepadId === C.notepadId) ||
            (this.selectedContextService.getMentions(r, "notepads", C).length >
              0 &&
              d.push(C))
        }),
        c.forEach((C) => {
          g.some((S) => extUri.isEqual(U.revive(S.uri), U.revive(C.uri))) ||
            (this.selectedContextService.getMentions(r, "terminalFiles", C)
              .length > 0 &&
              g.push(C))
        }),
        h.forEach((C) => {
          p.some((S) => S.filename === C.filename) ||
            (this.selectedContextService.getMentions(r, "cursorRules", C)
              .length > 0 &&
              p.push(C))
        })
      const m = ice(u, "fileSelections"),
        b = ice(d, "notepads"),
        y = ice(g, "terminalFiles"),
        w = ice(p, "cursorRules")
      this._ignoreChangesToContext.add(e),
        t
          ? this.composerDataService.updateComposerDataSetStore(e, (C) => {
              C("conversation", (S) => S.bubbleId === t, "context", {
                fileSelections: m,
                notepads: b,
                terminalFiles: y,
                cursorRules: w,
              })
            })
          : this.composerDataService.updateComposerDataSetStore(e, (C) => {
              C("context", {
                fileSelections: m,
                notepads: b,
                terminalFiles: y,
                cursorRules: w,
              })
            }),
        this.updateTokenCountOfCurrentComposer(t)
    }
    async insertSelectionIntoComposer(e, t) {
      if (!this.getComposer(e)) return
      let n
      t?.origin === "editor"
        ? (n = await this.getEditorCode())
        : t?.origin === "terminal" && (n = await this.getTerminalText()),
        n &&
          this.addContextToLastFocused({
            composerIdOrHandle: e,
            contextType:
              t?.origin === "terminal" ? "terminalSelections" : "selections",
            value: n,
          })
    }
    async getEditorCode(e, t) {
      return await B5i(this.aiService, this.dataScrubbingService, e, t)
    }
    isComposerEmpty(e) {
      const t = this.getComposer(e)
      return t ? t.conversation.length === 0 && t.text.trim() === "" : true
    }
    isComposerConversationEmpty(e) {
      const t = this.getComposer(e)
      return t ? t.conversation.length === 0 : true
    }
    isComposerContextUntouched(e) {
      const t = this.getComposer(e)
      return t ? t.hasChangedContext !== true : true
    }
    isComposerUntouched(e) {
      return this.isComposerEmpty(e) && this.isComposerContextUntouched(e)
    }
    canComposerSubmit(e, t) {
      const s = this.getComposer(e)
      if (!s) return false
      const n = this.composerDataService.getPendingUserDecisionGroup(e)
      if (s.status === "generating" && !t && !n) return false
      const r = this.composerDataService.getComposerCapability(e, ls.EDIT_TRAIL)
      if (t) {
        const l = s.conversation.find((u) => u.bubbleId === t)
        if (!l) return false
        const c =
            (l.context?.editTrailContexts?.length ?? 0) > 0 ||
            (s.chatGenerationUUID === undefined &&
              (r?.state?.().hasModifiedAnyModel ?? false)),
          h =
            (l.context?.notepads?.length ?? 0) > 0 && s.status !== "generating"
        return l.text.trim() !== "" || c || h
      }
      const o =
          (s.context.editTrailContexts?.length ?? 0) > 0 ||
          (s.chatGenerationUUID === undefined &&
            (r?.state?.().hasModifiedAnyModel ?? false)),
        a = (s.context.notepads?.length ?? 0) > 0 && s.status !== "generating"
      return s.text.trim() !== "" || o || a
    }
    async close(e, t) {
      const s = this.composerDataService.getComposerForceMode(e)
      if (
        (t?.skipHiding || (this.hide(e), this.blur(e)),
        (this.composerViewsService.isShowing(e) && !t?.skipHiding) ||
          s === "chat" ||
          e === this.composerDataService.selectedComposerId)
      )
        return
      const n = await this.composerDataService.getComposerHandleById(e)
      if (!n) {
        console.error("[composer] No composer data handle found")
        return
      }
      try {
        const r = this.composerDataService.getAllInlineDiffs(e)
        for (const o of r) {
          if (o?.composerMetadata?.version === undefined) {
            console.error("[composer] Inline diff has no version", o)
            continue
          }
          if (o && "newTextLines" in o && "originalTextLines" in o) {
            const a = await this.composerUtilsService.computeLineDiffs(
                e,
                o.uri,
                o.newTextLines,
              ),
              l = await this.composerUtilsService.computeLineDiffs(
                e,
                o.uri,
                o.originalTextLines,
              )
            a &&
              this.composerDataService.updateComposerCodeBlock(
                n,
                o.uri,
                o.composerMetadata.version,
                { newModelDiffWrtV0: a, originalModelDiffWrtV0: l },
              )
          }
        }
        this.cacheAllDiffs(n),
          setTimeout(() => {
            this.saveFiles(
              r.map((o) => o.uri),
              { force: true },
            )
          }, 100)
      } finally {
        n.dispose()
      }
    }
    handleOpenComposerPane(e, t) {
      this.openComposer(e, { ...t, view: "pane" })
    }
    handleOpenComposerEditor(e, t) {
      this.openComposer(e, { ...t, view: "editor" })
    }
    handleOpenComposerBar(e, t) {
      this.openComposer(e, { ...t, view: "bar" })
    }
    handleOpenComposer(e, t) {
      switch (this.getComposerLocation(e)) {
        case "editor":
          this.handleOpenComposerEditor(e, t)
          break
        case "pane":
          this.handleOpenComposerPane(e, t)
          break
        case "bar":
          this.handleOpenComposerBar(e, t)
          break
      }
    }
    async openComposer(e, t) {
      const s = this.composerDataService.getComposerForceMode(e),
        n = this.composerDataService.getSelectedIdByForceMode(s)
      if (t?.insertSelection) {
        const a = this.terminalService.getActiveInstance()?.hasFocus ?? false
        a &&
          this.analyticsService.trackEvent("terminal.addToComposer", {
            mode: s === "chat" ? "chat" : "composer",
          }),
          await this.insertSelectionIntoComposer(e, {
            origin: a ? "terminal" : "editor",
          })
      }
      if (
        this.composerUnificationService.reactiveUnificationMode() !==
          "disabled" &&
        t?.unifiedMode
      ) {
        const o = this.composerDataService.getComposerUnifiedMode(e)
        t.unifiedMode !== o &&
          this.updateComposer(e, { unifiedMode: t.unifiedMode })
      }
      if (e === n) {
        await this.showAndFocus(e, t)
        return
      }
      if (s !== "chat") {
        if (
          this.composerDataService.selectedChatId === e &&
          this.composerUnificationService.reactiveUnificationMode() ===
            "disabled"
        ) {
          console.error(
            "[balta] For some reason, we are opening an edit composer but that same composer is already selected as a chat composer, for now we will just open the chat composer",
          )
          return
        }
        this.composerDataService.setAllComposersData("selectedComposerId", e)
      } else {
        if (this.composerDataService.selectedComposerId === e) {
          console.error(
            "[balta] For some reason, we are opening a chat composer but that same composer is already selected as an edit composer, for now we will just open the edit composer",
          )
          return
        }
        this.composerDataService.setAllComposersData("selectedChatId", e)
      }
      const r = await this.composerDataService.getComposerHandleById(e)
      if (!r) {
        console.error("[composer] No composer data handle found")
        return
      }
      try {
        await this.showAndFocus(e, t),
          s === "edit" &&
            (this._onDidOpenComposer.fire(),
            this.shouldCache(r) ||
              (await this.turnAllCachedCodeBlocksToDiffs(r),
              await this.reactivateApplyingCodeBlocks(r)))
      } finally {
        r.dispose()
      }
    }
    getIsNewConversationAgentic(e) {
      return e === "chat"
        ? false
        : this.reactiveStorageService.applicationUserPersistentStorage
            .composerState.defaultUseToolsInEdit === true
    }
    async createComposer(e) {
      e = { ...e, forceMode: e?.forceMode }
      const s = this.terminalService.getActiveInstance()?.hasFocus ?? false
      if (
        (s &&
          this.analyticsService.trackEvent("terminal.addToComposer", {
            mode: e.forceMode === "chat" ? "chat" : "composer",
          }),
        this.composerUnificationService.reactiveUnificationMode() !==
          "disabled")
      )
        (e.partialState = {
          unifiedMode:
            e.forceMode ??
            this.composerDataService.getComposerUnifiedMode(
              this.composerDataService.selectedComposerId,
            ),
          ...(e.partialState ?? {}),
        }),
          (e.forceMode = "edit")
      else {
        e.forceMode = e.forceMode ?? "edit"
        const b = this.composerDataService.getSelectedIdByForceMode(
            e.forceMode,
          ),
          y = this.composerDataService.getComposerIsAgentic(b)
        e.partialState = {
          unifiedMode: y ? "agent" : e.forceMode,
          ...(e.partialState ?? {}),
        }
      }
      const n = this.composerDataService.getSelectedIdByForceMode(e.forceMode),
        r = this.composerDataService.getComposerData(n)
      if (
        (this.shouldShowAcceptRejectAll(n) && (await this.acceptAll(n)),
        !e?.ignoreEmptyCheck &&
          this.isComposerEmpty(n) &&
          (!e?.backgroundInfo || !!r?.backgroundInfo))
      ) {
        await this.resetComposer(
          n,
          e?.partialState,
          e?.dontRefreshReactiveContext,
        ),
          e?.insertSelection &&
            (await this.insertSelectionIntoComposer(n, {
              origin: s ? "terminal" : "editor",
            })),
          await this.showAndFocus(n, e)
        return
      }
      const l = rt()
      let c, h, u, d
      const g = Mae(
          this.instantiationService,
          this.reactiveStorageService,
          l,
          [],
        ),
        p = e?.forceMode ?? "edit",
        m = {
          ...yI(l),
          ...e?.partialState,
          backgroundInfo: c,
          capabilities: g,
          forceMode: p,
          isAgentic: this.getIsNewConversationAgentic(p),
        }
      if (
        (this.composerDataService.appendComposer(m),
        e?.forceMode === "chat" &&
          this.composerDataService.selectedComposerId === l)
      ) {
        console.error(
          "[balta] For some reason, we are opening a chat composer but that same composer is already selected as an edit composer, for now we will just exit early",
        )
        return
      } else if (
        e?.forceMode !== "chat" &&
        this.composerDataService.selectedChatId === l &&
        this.composerUnificationService.reactiveUnificationMode() === "disabled"
      ) {
        console.error(
          "[balta] For some reason, we are opening an edit composer but that same composer is already selected as a chat composer, for now we will just exit early",
        )
        return
      }
      this.composerDataService.setAllComposersData(
        e?.forceMode === "chat" ? "selectedChatId" : "selectedComposerId",
        l,
      ),
        await this.resetComposer(
          l,
          e?.partialState,
          e?.dontRefreshReactiveContext,
        ),
        e?.insertSelection &&
          (s &&
            this.analyticsService.trackEvent("terminal.addToComposer", {
              mode: e.forceMode === "chat" ? "chat" : "composer",
            }),
          await this.insertSelectionIntoComposer(l, {
            origin: s ? "terminal" : "editor",
          })),
        await this.showAndFocus(l, e)
    }
    async deleteComposer(e) {
      const t = await this.composerDataService.getComposerHandleById(e)
      if (!t) {
        console.error("[composer] trying to delete non-existent composer", e)
        return
      }
      try {
        const s = this.composerDataService.getComposerForceMode(t),
          n = this.composerDataService.getSelectedIdByForceMode(s)
        if ((console.log("[composer] deleting composer", e), e === n)) {
          const r =
            this.composerDataService.allComposersData.allComposers.filter(
              (o) =>
                o.composerId !== e &&
                this.composerDataService.getComposerForceMode(o) === s,
            )
          if (r.length > 0) {
            const o = r[0].composerId
            this.openComposer(o, { skipShowAndFocus: true })
          } else {
            this.resetComposer(e), this.close(e)
            return
          }
        }
        try {
          this.cleanUpComposer(e)
        } catch (r) {
          console.error(`[composer] Error cleaning up composer ${e}:`, r)
        }
        this.composerDataService.deleteComposer(e)
      } finally {
        t?.dispose()
      }
    }
    async saveAll(e, t) {
      this.analyticsService.trackEvent("composer.save_all")
      const s = this.composerDataService
        .getLatestCodeBlocksOfStatuses(e, vBi)
        .map((n) => n.uri)
      await this.saveFiles(s, t)
    }
    maybeUpdateFileSelectionsFromCmdI(e) {
      const t = this.getComposer(e)
      if (!t) return
      const s = t.context.fileSelections,
        n = t.context.notepads ?? [],
        r = t.context.terminalFiles ?? [],
        o = this.editorService.getEditors(0),
        a = new Set(o.map((m) => m.groupId)),
        l = Array.from(a)
          .map((m) => this.editorGroupsService.getGroup(m)?.activeEditor)
          .filter(bn),
        c = [],
        h = [],
        u = []
      for (const m of l)
        !m?.resource ||
          !this.isCompatibleScheme(m.resource.scheme) ||
          (m.resource.scheme === ce.notepad &&
          m.resource &&
          !h.some((b) => b.notepadId === m.resource.path)
            ? h.push({ notepadId: m.resource.path })
            : m.resource.scheme === ce.vscodeTerminal &&
                m.resource &&
                !u.some((b) =>
                  extUri.isEqual(U.revive(b.uri), U.revive(m.resource)),
                )
              ? u.push({ uri: m.resource })
              : m.resource &&
                !c.some((b) =>
                  extUri.isEqual(U.revive(b.uri), U.revive(m.resource)),
                ) &&
                (this.selectedContextService.shouldIgnoreUri(m.resource) ||
                  c.push({ uri: m.resource })))
      const d =
          s.length === c.length &&
          s.every((m) =>
            c.some((b) => extUri.isEqual(U.revive(b.uri), U.revive(m.uri))),
          ),
        g =
          n.length === h.length &&
          n.every((m) => h.some((b) => b.notepadId === m.notepadId)),
        p =
          r.length === u.length &&
          r.every((m) =>
            u.some((b) => extUri.isEqual(U.revive(b.uri), U.revive(m.uri))),
          )
      if (d && g && p) {
        const m = this.editorService.activeEditor
        if (m && m.resource) {
          const b = [],
            y = [],
            w = []
          m.resource.scheme === ce.notepad
            ? b.push({ notepadId: m.resource.path })
            : m.resource.scheme === ce.vscodeTerminal
              ? y.push({ uri: m.resource })
              : this.selectedContextService.shouldIgnoreUri(m.resource) ||
                w.push({ uri: m.resource }),
            this._ignoreChangesToContext.add(e),
            this.composerDataService.updateComposerDataSetStore(e, (C) =>
              C("context", {
                fileSelections: w,
                notepads: b,
                terminalFiles: y,
              }),
            )
        }
      } else
        s.length + n.length + r.length === 1 &&
          this.refreshReactiveContextItem(e)
    }
    isCompatibleScheme(e) {
      return [
        ce.file,
        ce.vscodeRemote,
        ce.vscodeNotebook,
        ce.notepad,
        ce.vscodeTerminal,
      ].includes(e)
    }
    getCurrentFile() {
      const e = this.aiFileInfoService.getLastActiveFileEditor()
      if (!e) return
      const t = Ln.getOriginalUri(e.input)
      if (t && this.isCompatibleScheme(t.scheme))
        return { uri: t, isCurrentFile: true }
    }
    getInlineDiffServiceLookalikePure(e, t, s) {
      return {
        addLinesToDiff: (n, r) => {
          this.composerDataService.updateComposerDataSetStore(e, (a) =>
            a(
              "codeBlockData",
              t.toString(),
              (l) => l.status === "applying",
              "intermediateModelLines",
              (l) => [...(l ?? []), ...r],
            ),
          )
          const o = this.getApplyingDiffsState(e)
          if (!this.shouldCache(e, { uri: t, version: s }))
            if (o.isReactivatingApplyingDiffs[t.toString()])
              o.applyingDiffsBacklogLines[t.toString()] ||
                (o.applyingDiffsBacklogLines[t.toString()] = []),
                o.applyingDiffsBacklogLines[t.toString()].push(...r)
            else {
              if (!this.getComposer(e))
                throw new Error("[composer] composer not found")
              const l = this.composerDataService.getInlineDiff(e, t)
              if (l) {
                const c = o.applyingDiffsBacklogLines[t.toString()]
                return (
                  c &&
                    c.length > 0 &&
                    (console.log("[composer] backlog lines", c),
                    (r = [...c, ...r]),
                    (o.applyingDiffsBacklogLines[t.toString()] = [])),
                  this.inlineDiffService.addLinesToDiff(l.id, r)
                )
              } else console.error("[composer] no diff id for uri", t)
            }
        },
        addActiveDiff: async (n) => {
          const r = { stack: [], error: undefined, hasError: false }
          try {
            const o = __addDisposableResource(
              r,
              gl(
                "ComposerService.getInlineDiffServiceLookalikePure.addActiveDiff",
              ),
              false,
            )
            this.composerDataService.updateComposerDataSetStore(e, (l) =>
              l(
                "codeBlockData",
                t.toString(),
                (c) => c.status === "applying",
                "intermediateModelLines",
                [],
              ),
            )
            const a = this.getApplyingDiffsState(e)
            if (
              ((a.applyingDiffsBacklogLines[t.toString()] = []),
              (a.isReactivatingApplyingDiffs[t.toString()] = false),
              this.shouldCache(e, { uri: t, version: s }))
            ) {
              const l = rt()
              return this.registerCachedCodeBlock(e, t, s), { id: l }
            } else {
              const l = await this.inlineDiffService.addActiveDiff(n)
              return (
                this.composerDataService.updateComposerCodeBlock(e, t, s, {
                  lastDiffId: l.id,
                }),
                l
              )
            }
          } catch (o) {
            ;(r.error = o), (r.hasError = true)
          } finally {
            __disposeResources(r)
          }
        },
        finishDiffSuccess: (n) => {
          const r = { stack: [], error: undefined, hasError: false }
          try {
            const o = __addDisposableResource(
              r,
              gl(
                "ComposerService.getInlineDiffServiceLookalikePure.finishDiffSuccess",
              ),
              false,
            )
            if (!this.shouldCache(e, { uri: t, version: s })) {
              if (!this.getComposer(e))
                throw new Error("[composer] composer not found")
              const l = this.composerDataService.getInlineDiff(e, t)
              if (l) return this.inlineDiffService.finishDiffSuccess(l.id)
              console.error("[composer] no diff id for uri", t)
            }
          } catch (o) {
            ;(r.error = o), (r.hasError = true)
          } finally {
            __disposeResources(r)
          }
        },
        cancelDiff: (n) => {
          const r = { stack: [], error: undefined, hasError: false }
          try {
            const o = __addDisposableResource(
              r,
              gl(
                "ComposerService.getInlineDiffServiceLookalikePure.cancelDiff",
              ),
              false,
            )
            if (!this.shouldCache(e, { uri: t, version: s })) {
              if (!this.getComposer(e))
                throw new Error("[composer] composer not found")
              const l = this.composerDataService.getInlineDiff(e, t)
              if (l) return this.inlineDiffService.cancelDiff(l.id)
              console.error("[composer] no diff id for uri", t)
            }
          } catch (o) {
            ;(r.error = o), (r.hasError = true)
          } finally {
            __disposeResources(r)
          }
        },
      }
    }
    isCodeBlockRegisteredAsCached(e, t, s) {
      const n =
          !!this._uriToCachedCodeBlocks
            .get(t.toString())
            ?.some((o) => o.version === s && o.composerId === e) ||
          !!this._uriToCachedCodeBlocksQueue
            .get(t.toString())
            ?.some((o) => o.version === s && o.composerId === e),
        r = this.composerDataService.getComposerCodeBlock(e, t, s)?.isCached
      return n && r
    }
    async getTerminalText(e) {
      return await _5i(this.terminalService, this.dataScrubbingService, false, e)
    }
    getContextId(e, t) {
      return t ? `${e}:${t}` : e
    }
    addContext(e) {
      const {
          composerIdOrHandle: t,
          contextType: s,
          value: n,
          uuid: r,
          addToUndoRedo: o = true,
          shouldShowPreview: a = true,
        } = e,
        l = typeof t == "string" ? t : t.data.composerId
      this.selectedContextService.addContext({
        contextType: s,
        value: n,
        setContext: (...c) => {
          this.composerDataService.updateComposerDataSetStore(t, (h) =>
            h("context", ...c),
          )
        },
        getContext: () => {
          const c = this.getComposer(t)
          if (!c) throw new Error("[composer] Composer not found")
          return c.context
        },
        id: this.getContextId(l),
        shouldAddToUndoRedoStack: o,
        mention: r ? { uuid: r } : undefined,
      }),
        a &&
          setTimeout(() => {
            let c
            const h = this.getComposer(t)
            if (!h) throw new Error("[composer] Composer not found")
            Dg(s) && (c = h.context[s].findIndex((u) => vI(s, u, n))),
              c !== -1 &&
                this._onShouldShowPreview.fire({
                  composerId: h.composerId,
                  contextType: s,
                  index: c,
                })
          })
    }
    removeAllListContext(e) {
      const {
          composerId: t,
          bubbleId: s,
          contextType: n,
          addToUndoRedo: r = true,
        } = e,
        o = this.selectedContextService.removeAllListContext({
          contextType: n,
          setContext: (...a) => {
            s
              ? this.composerDataService.updateComposerDataSetStore(t, (l) =>
                  l("conversation", (c) => c.bubbleId === s, "context", ...a),
                )
              : this.composerDataService.updateComposerDataSetStore(t, (l) =>
                  l("context", ...a),
                )
          },
          getContext: () => {
            const a = this.getComposer(t)
            if (!a) throw new Error("[composer] Composer not found")
            if (s) {
              const l = this.composerDataService.getComposerBubble(t, s)
              if (!l || !l.context)
                throw new Error("[composer] Bubble not found")
              return l.context
            }
            return a.context
          },
          id: this.getContextId(t, s),
          shouldAddToUndoRedoStack: r,
        })
      return (
        this._onContextRemoved.fire({
          composerId: t,
          contextType: n,
          removedMentionIds: o.map((a) => a.uuid),
        }),
        o
      )
    }
    removeContext(e) {
      const {
          composerIdOrHandle: t,
          contextType: s,
          index: n,
          addToUndoRedo: r = true,
        } = e,
        o = typeof t == "string" ? t : t.data.composerId,
        a = this.selectedContextService.removeContext({
          contextType: s,
          setContext: (...l) => {
            this.composerDataService.updateComposerDataSetStore(t, (c) =>
              c("context", ...l),
            )
          },
          getContext: () => {
            const l = this.getComposer(t)
            if (!l) throw new Error("[composer] Composer not found")
            return l.context
          },
          index: n,
          id: this.getContextId(o),
          shouldAddToUndoRedoStack: r,
        })
      return (
        this._onContextRemoved.fire({
          composerId: o,
          contextType: s,
          removedMentionIds: a.map((l) => l.uuid),
        }),
        a
      )
    }
    removeMention(e, t) {
      this.selectedContextService.removeMention({
        uuid: t,
        setContext: (...s) => {
          this.composerDataService.updateComposerDataSetStore(e, (n) =>
            n("context", ...s),
          )
        },
        getContext: () => {
          const s = this.getComposer(e)
          if (!s) throw new Error("[composer] Composer not found")
          return s.context
        },
        id: this.getContextId(e),
        shouldAddToUndoRedoStack: true,
      })
    }
    addBubbleContext(e) {
      const {
          composerIdOrHandle: t,
          bubbleId: s,
          contextType: n,
          value: r,
          uuid: o,
          addToUndoRedo: a = true,
        } = e,
        l = typeof t == "string" ? t : t.data.composerId
      this.selectedContextService.addContext({
        contextType: n,
        value: r,
        setContext: (...c) => {
          this.composerDataService.updateComposerDataSetStore(t, (h) =>
            h("conversation", (u) => u.bubbleId === s, "context", ...c),
          )
        },
        getContext: () => {
          const c = this.composerDataService.getComposerBubble(t, s)
          if (!c || !c.context) throw new Error("[composer] Bubble not found")
          return c.context
        },
        id: this.getContextId(l, s),
        shouldAddToUndoRedoStack: a,
        mention: o ? { uuid: o } : undefined,
      })
    }
    removeBubbleContext(e) {
      const {
          composerIdOrHandle: t,
          bubbleId: s,
          contextType: n,
          index: r,
          addToUndoRedo: o = true,
        } = e,
        a = typeof t == "string" ? t : t.data.composerId,
        l = this.selectedContextService.removeContext({
          contextType: n,
          setContext: (...c) => {
            this.composerDataService.updateComposerDataSetStore(t, (h) =>
              h("conversation", (u) => u.bubbleId === s, "context", ...c),
            )
          },
          getContext: () => {
            const c = this.composerDataService.getComposerBubble(t, s)
            if (!c || !c.context) throw new Error("[composer] Bubble not found")
            return c.context
          },
          index: r,
          id: this.getContextId(a, s),
          shouldAddToUndoRedoStack: o,
        })
      return (
        this._onContextRemoved.fire({
          composerId: a,
          bubbleId: s,
          contextType: n,
          removedMentionIds: l.map((c) => c.uuid),
        }),
        l
      )
    }
    removeBubbleMention(e, t, s) {
      this.selectedContextService.removeMention({
        uuid: s,
        setContext: (...n) => {
          this.composerDataService.updateComposerDataSetStore(e, (r) =>
            r("conversation", (o) => o.bubbleId === t, "context", ...n),
          )
        },
        getContext: () => {
          const n = this.composerDataService.getComposerBubble(e, t)
          if (!n || !n.context) throw new Error("[composer] Bubble not found")
          return n.context
        },
        id: this.getContextId(e, t),
        shouldAddToUndoRedoStack: true,
      })
    }
    resetContext(e, t) {
      if (!this.getComposer(e)) {
        console.error(`[composer] No composer found for ID: ${e}`)
        return
      }
      for (const n of D7)
        Dg(n)
          ? this.removeAllListContext({
              composerId: e,
              bubbleId: t,
              contextType: n,
              addToUndoRedo: false,
            })
          : t
            ? this.removeBubbleContext({
                composerIdOrHandle: e,
                bubbleId: t,
                contextType: n,
                addToUndoRedo: false,
              })
            : this.removeContext({
                composerIdOrHandle: e,
                contextType: n,
                addToUndoRedo: false,
              })
      t || this.updateComposer(e, { hasChangedContext: false }),
        this.refreshReactiveContextItem(e, t, true),
        console.log(`[composer] Reset context for composer ID: ${e}`)
    }
    addContextToLastFocused(e) {
      const t = this.getComposer(e.composerIdOrHandle)
      t &&
        (t.lastFocusedBubbleId
          ? this.addBubbleContext({ ...e, bubbleId: t.lastFocusedBubbleId })
          : this.addContext({ ...e }))
    }
    async checkoutToCheckpoint(e, t, s) {
      const n = this.composerDataService.getComposerFromIdOrHandle(e)
      if (!n) {
        console.error("[composer] No composer found for the given ID")
        return
      }
      const r = n.composerId,
        o = typeof t == "string"
      if (o && n.currentBubbleId === t) {
        console.log("[composer] Already at the target message")
        return
      }
      let a
      if (
        o &&
        ((a = n.conversation.findIndex((m) => m.bubbleId === t)), a === -1)
      ) {
        console.error(
          "[composer] No message found with the given bubble ID or message has no checkpoint",
        )
        return
      }
      if (await this.composerUtilsService.isCheckpointSameAsCurrent(r, t)) {
        console.log("[composer] Checkout to message is the same as current"),
          this.cancelChat(r),
          this.updateComposer(r, {
            currentBubbleId: o ? t : undefined,
            editingBubbleId: o ? t : undefined,
          }),
          setTimeout(() => {
            this.getPrevEditingBubbleInputDelegate(r).focus()
          }, 0)
        return
      }
      if (
        !s?.skipDialog &&
        o &&
        (await this.prettyDialogService.openDialog({
          title: "Revert file changes?",
          message:
            'This will undo all changes after this point. You can restore them via "Checkout to latest changes" at the end of the conversation.',
          cancelButton: { id: "cancel", label: "Cancel" },
          primaryButton: { id: "continue", label: "Continue" },
        })) !== "continue"
      )
        return
      this.cancelChat(r)
      let c = new Set(),
        h = new Map(),
        u = new Set()
      const d = n.currentBubbleId
        ? n.conversation.findIndex((m) => m.bubbleId === n.currentBubbleId)
        : n.conversation.length
      let g = !o
      if (
        (a && (g = a > d),
        this.analyticsService.trackEvent("composer.checkout_to_message", {
          messageIndex: a,
          isMovingForward: g,
        }),
        n.currentBubbleId === undefined)
      ) {
        const m = await this.composerUtilsService.createCurrentCheckpoint(
          r,
          n.latestCheckpoint,
        )
        if (!m) return
        this.updateComposer(r, { latestCheckpoint: m })
      } else {
        const m = n.conversation.find((b) => b.bubbleId === n.currentBubbleId)
        if (m) {
          const b = m.checkpoint,
            y = await this.composerUtilsService.createCurrentCheckpoint(r, b)
          if (!y) return
          this.composerDataService.updateComposerDataSetStore(r, (w) =>
            w(
              "conversation",
              (C) => C.bubbleId === n.currentBubbleId,
              "checkpoint",
              y,
            ),
          )
        }
      }
      const p = o ? n.conversation[a].checkpoint : t
      if (!p)
        throw new Error(
          "[composer] No checkpoint found for the given bubble ID",
        )
      if (o)
        ({
          filesToRevert: c,
          intermediateFiles: h,
          foldersToDelete: u,
        } = this.composerUtilsService.getFilesToRevertForCheckpoint(r, a, d, p))
      else {
        const m = new Set(
          p.activeInlineDiffs?.map((b) => b.uri.toString()) ?? [],
        )
        c = new Set(
          p.files.map((b) => b.uri.toString()).filter((b) => !m.has(b)),
        )
      }
      for (const m of c)
        try {
          const b = U.parse(m)
          let y
          if (p.files.some((w) => w.uri.toString() === m))
            y = p.files.find((w) => w.uri.toString() === m)
          else {
            const w = h.get(m)
            w && (y = w.checkpoint.files.find((C) => C.uri.toString() === m))
          }
          if (y) {
            if (y.isNewlyCreated)
              await this.deleteFile(b),
                console.log(`[composer] Deleted newly created file ${m}`)
            else {
              await this.createNewFileAndMaybeFolder(r, y.uri, true)
              let C
              try {
                C = await this.textModelService.createModelReference(b)
                const S = C.object.textEditorModel,
                  x = S.getLinesContent(),
                  k =
                    this.composerUtilsService.getCodeBlockLinesByDiff(
                      r,
                      b,
                      y.originalModelDiffWrtV0 ?? [],
                    ) ?? []
                if (k.length === 0) {
                  console.error(
                    `[composer] Empty originalModelLines for ${b.toString()}`,
                  )
                  continue
                }
                ;(x.length !== k.length ||
                  x.join(`
`) !==
                    k.join(`
`)) &&
                  (S.setValue(
                    k.join(`
`),
                  ),
                  await this.saveFile(b, {
                    force: true,
                    waitForEditorToOpen: true,
                  }))
              } finally {
                C?.dispose()
              }
            }
            const w =
              this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
                (C) => C.uri.toString() === m,
              )
            w && this.inlineDiffService.remove(w.id),
              console.log(`[composer] Processed file ${m} for revert operation`)
          }
        } catch (b) {
          console.error(`[composer] Error processing file ${m}:`, b)
        }
      for (const m of u)
        try {
          await this.deleteFolder(U.parse(m)),
            console.log(`[composer] Deleted newly created folder ${m}`)
        } catch (b) {
          console.error(`[composer] Error deleting folder ${m}:`, b)
        }
      for (const m of p.nonExistentFiles)
        await this.deleteFile(m.uri),
          console.log(
            `[composer] Deleted non existent file ${m.uri.toString()}`,
          )
      this.updateComposer(r, {
        currentBubbleId: o ? t : undefined,
        editingBubbleId: o ? t : undefined,
        newlyCreatedFiles: [...p.inlineDiffNewlyCreatedResources.files],
        newlyCreatedFolders: [...p.inlineDiffNewlyCreatedResources.folders],
      }),
        setTimeout(() => {
          this.getPrevEditingBubbleInputDelegate(r).focus()
        }, 0),
        p.activeInlineDiffs.forEach(async (m) => {
          const { uri: b, version: y } = m
          await this.turnApplyToInlineDiff(r, b, y, {
            setOriginalModelLines: true,
          })
        }),
        console.log(
          `[composer] Completed reverting to ${o ? "message " + t : "checkpoint"}`,
        )
    }
    async checkoutToLatest(e) {
      const t = this.composerDataService.getComposerFromIdOrHandle(e)
      if (!t) {
        console.error("[composer] No composer found for the given ID")
        return
      }
      if (!t.latestCheckpoint) {
        console.error("[composer] No latest checkpoint found for the composer")
        return
      }
      return this.checkoutToCheckpoint(e, t.latestCheckpoint)
    }
    async syncComposerWorktreeBranch(e) {
      const t = this.composerDataService.getComposerData(e)
      if (!t || !t.backgroundInfo)
        throw new Error(
          "[composer] No composer found for the given ID, or no background info",
        )
      const { localBranchName: s, worktreePath: n } = t.backgroundInfo
      try {
        await this.acceptAllCached(e)
        const r = Object.keys(t.codeBlockData)
        for (const o of r) {
          const a = t.codeBlockData[o],
            l = a[a.length - 1],
            h = this.composerUtilsService.getCodeBlockNewModelLines(
              e,
              U.parse(o),
              l.version,
            )?.join(`
`)
          !h ||
            h.length === 0 ||
            (await this.fileService.writeFile(U.parse(o), Yt.fromString(h)))
        }
        await this.gitContextService.syncWorktreeToBranch(n, s)
      } catch (r) {
        console.error(
          `[composer] Error syncing worktree for composer ${t.composerId}:`,
          r,
        )
      }
    }
    async checkIfBackgroundComposerIsCorrupted(e) {
      const t = this.getComposer(e)
      if (!t || !t.backgroundInfo) return false
      const { worktreePath: s } = t.backgroundInfo
      return !(await this.fileService.exists(U.parse(s)))
    }
    isBackground(e) {
      return (
        this.composerDataService.getComposerFromIdOrHandle(e)
          ?.backgroundInfo !== undefined
      )
    }
    getModelDetails(e) {
      const t = this.aiService.getModelDetails({
          specificModelField: e ?? "composer",
        }),
        s = ["claude-3.5-sonnet", "claude-3-5-sonnet-20241022"]
      return t.apiKey === undefined &&
        this.reactiveStorageService.applicationUserPersistentStorage
          .turboModeOptions.useTurboMode === true &&
        t.modelName !== undefined &&
        s.includes(t.modelName)
        ? new zr({ ...t, modelName: "claude-3-5-sonnet-turbo" })
        : t
    }
    showInfoBox(e) {
      this.reactiveStorageService.setNonPersistentStorage(
        "composerState",
        "infoBoxMessage",
        e,
      )
    }
    getAllCachedCodeBlocks(e) {
      const t = this.getComposer(e)
      if (!t) throw Error("[composer] composer doesn't exist")
      const { codeBlockData: s } = t
      return Object.values(s)
        .flat()
        .filter(({ isCached: r }) => r === true)
    }
    async readFileContents(e) {
      try {
        return (await this.fileService.readFile(e)).value.toString()
      } catch (t) {
        return console.error("Error reading file:", t), ""
      }
    }
    async getSortedCandidateFiles(e, t) {
      const s = this.getComposer(e)
      if (!s) return []
      const n = s.text,
        r = t?.skipSemSearch ?? false,
        [o, a, l, c, h] = await Promise.all([
          this.recentFilesTrackerService.getRecentlyViewedFiles(Jgs),
          r
            ? Promise.resolve([])
            : this.repositoryService.parallelSearch(n, 30, 15, {
                raceNRequests: 6,
                fast: true,
              }),
          s?.gitGraphFileSuggestions?.length
            ? Promise.resolve(s.gitGraphFileSuggestions)
            : this.composerDataService.getContextGraphFilesFromFileSelections(
                e,
              ),
          this.everythingProviderService.onlyLocalProvider?.runCommand(
            EditHistoryDiffFormatter.CompileGlobalDiffTrajectories,
            {},
          ),
          this.aiService.aiClient(),
        ]),
        u = a
          .sort((w, C) => C.score - w.score)
          .map((w) => {
            if (w.codeBlock)
              return {
                uri: this.workspaceContextService.resolveRelativePath(
                  w.codeBlock.relativeWorkspacePath,
                ),
                score: w.score,
              }
          })
          .filter(bn)
          .slice(0, V1r)
      if (!s) return []
      const d =
          s.context.fileSelections.length > 0
            ? U.revive(s.context.fileSelections[0].uri)
            : undefined,
        [g, p] = d
          ? await Promise.all([
              this.readFileContents(d),
              {
                line: this.editorService.activeTextEditorControl?.getPosition()
                  ?.lineNumber,
                column:
                  this.editorService.activeTextEditorControl?.getPosition()
                    ?.column,
              },
            ])
          : [undefined, undefined],
        m = d
          ? {
              relativeWorkspacePath:
                this.workspaceContextService.asRelativePath(d),
              contents: g,
              cursorPosition: p,
            }
          : undefined,
        b = [{ text: s.text, type: fs.HUMAN }],
        y =
          (s.text === undefined || s.text.trim().length === 0) &&
          s.context.fileSelections.length === 1
      return await Kgs(
        c,
        l,
        o,
        u,
        y,
        m,
        b,
        h,
        this.workspaceContextService,
        this.fileService,
      )
    }
    shouldRenameComposer(e) {
      const t = e.conversation.filter((s) => s.type === fs.AI).length
      return t >= 1 && (!e.name || t === 1)
    }
    async renameComposer(e) {
      const t = this.getComposer(e)
      if (!(!t || !this.shouldRenameComposer(t)))
        try {
          const n = await (
            await this.aiService.aiClient()
          ).nameTab({ messages: t.conversation })
          if (n.name)
            await this.composerDataService.updateComposerDataAsync(e, (r) =>
              r("name", n.name),
            )
          else {
            const r = t.conversation[0]
            r &&
              r.type === fs.HUMAN &&
              (await this.composerDataService.updateComposerDataAsync(e, (o) =>
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
    maybeRunOnComposerSettled(e) {
      return this.isComposerSettled(e) ? (this.onComposerSettled(e), true) : false
    }
    isComposerSettled(e) {
      const t = this.getComposer(e)
      if (!t) return true
      const s = (this.composerDataService.getLastAiBubble(e)?.codeBlocks ?? [])
          .map((a) =>
            this.composerDataService.getComposerCodeBlock(e, a.uri, a.version),
          )
          .filter(bn),
        n = s.some((a) => a.status === "applying"),
        r = s.some((a) => a.status === "cancelled"),
        o = t.status === "generating"
      return !n && !o && !r
    }
    async onComposerSettled(e) {
      let t = this.getComposer(e)
      if (!t || t.status === "aborted") return
      console.log("[composer] on composer settled", e)
      const s = this.composerDataService.getLastHumanBubbleId(e),
        n = s ? this.composerDataService.getComposerBubble(e, s) : undefined,
        r = this.composerDataService.getLastBubbleId(e),
        o = this.composerDataService.getLastBubble(e)
      if (!s || !n) {
        console.error(
          "[composer] on settled was run without a previous human bubble",
        )
        return
      }
      if (!r || !o || o.type !== fs.AI) {
        console.error(
          "[composer] on settled was run without a previous ai bubble",
        )
        return
      }
      this.composerDataService.updateComposerDataSetStore(e, (l) =>
        l(
          "conversation",
          (c) => c.bubbleId === r,
          "timingInfo",
          (c) => {
            if (c) return { ...c, clientSettleTime: Date.now() }
          },
        ),
      )
      const a = {
        composerId: e,
        humanBubbleId: s,
        aiBubbleId: r,
        isCapabilityIteration: !!n.isCapabilityIteration,
      }
      try {
        ;(await this.composerUtilsService.runCapabilitiesForProcess(
          e,
          "composer-settled",
          a,
        ))
          ? this.submitChatMaybeAbortCurrent(e, "", {
              isCapabilityIteration: true,
            })
          : this.isComposerSettled(e) && this.onComposerDone(e, a)
      } catch (l) {
        console.error(
          "[composer] error running capabilities for composer-settled",
          l,
        )
      }
    }
    async onComposerDone(e, t) {
      await this.composerUtilsService.runCapabilitiesForProcess(
        e,
        "composer-done",
        t,
      )
    }
    dispose() {
      super.dispose()
    }
    registerNewCodeBlock(e, t, s, n, r) {
      const o = this.getComposer(e)
      if (!o) throw new Error("[composer] No composer found for the given ID")
      const a = r?.bubbleId
          ? o.conversation.findIndex((b) => b.bubbleId === r.bubbleId)
          : o.conversation.length - 1,
        l = o.conversation[a]
      if (!l || l.type !== fs.AI)
        throw new Error("[composer] No AI message found")
      const c = t.toString(),
        h = l.codeBlocks?.filter((b) => b.uri.toString() === c) ?? [],
        u = this.composerDataService.getLatestCodeBlockVersionForMessage(
          e,
          t,
          a,
          n,
        )
      let d,
        g = []
      const p = h.findIndex((b) => b.codeBlockIdx > n)
      p === -1
        ? (d = u + 1)
        : ((d = h[p].version),
          (g = h
            .slice(p)
            .map((b) => ({
              version: b.version,
              codeBlockIdx: b.codeBlockIdx,
              messageIdx: a,
            }))))
      for (let b = a + 1; b < o.conversation.length; b++) {
        const y =
          o.conversation[b].codeBlocks?.filter(
            (w) => w.uri.toString() === c && w.version >= d,
          ) ?? []
        g.push(
          ...y.map((w) => ({
            version: w.version,
            codeBlockIdx: w.codeBlockIdx,
            messageIdx: b,
          })),
        )
      }
      o.status !== "generating" &&
        this._onManuallyRegisteringCodeBlock.fire({
          uri: t,
          version: d,
          messageIndex: a,
        })
      for (let b = g.length - 1; b >= 0; b--) {
        const { version: y, codeBlockIdx: w, messageIdx: C } = g[b]
        this.updateCodeBlockVersion(e, t, y, y + 1, w, C)
      }
      const m = {
        uri: t,
        content: s,
        version: d,
        status: r?.status ?? "none",
        isNotApplied: r?.isNotApplied,
        languageId: r?.languageId,
      }
      return (
        this.composerDataService.updateComposerDataSetStore(e, (b) =>
          b("codeBlockData", c, (y) => {
            const w = [...(y || [])],
              C = w.findIndex((S) => S.version >= d)
            return C === -1 ? w.push(m) : w.splice(C, 0, m), w
          }),
        ),
        this.composerDataService.updateComposerDataSetStore(e, (b) =>
          b("conversation", a, "codeBlocks", (y) => {
            const w = [...(y || [])],
              C = w.findIndex((x) => x.codeBlockIdx > n),
              S = { uri: t, version: d, codeBlockIdx: n }
            return C === -1 ? w.push(S) : w.splice(C, 0, S), w
          }),
        ),
        this.composerDataService.updateComposerDataSetStore(e, (b) =>
          b("tabs", (y) => {
            const w = { type: "code", uri: t, version: d },
              C = y.findIndex(
                (S) => S.type === "code" && S.uri.toString() === c,
              )
            return C !== -1 && y.splice(C, 1), [y[0], y[1], w, ...y.slice(2)]
          }),
        ),
        this.composerDataService.getComposerForceMode(e) !== "chat" &&
          m.version === 0 &&
          o.originalModelLines[c] === undefined &&
          this.composerUtilsService.getContentsOfFile(e, t).then((y) => {
            ;(y = y ?? [" "]),
              this.composerDataService.updateComposerDataSetStore(e, (w) =>
                w("originalModelLines", c, y),
              )
          }),
        m
      )
    }
    updateCodeBlockVersion(e, t, s, n, r, o) {
      if (!this.getComposer(e))
        throw new Error("[composer] No composer found for the given ID")
      const l = t.toString()
      this.composerDataService.updateComposerDataSetStore(e, (c) =>
        c(
          "codeBlockData",
          l,
          (h) =>
            h?.map((u) => (u.version === s ? { ...u, version: n } : u)) ?? [],
        ),
      ),
        this.composerDataService.updateComposerDataSetStore(e, (c) =>
          c(
            "conversation",
            (h, u) => u === o,
            "codeBlocks",
            (h) =>
              h?.map((u) =>
                u.uri.toString() === l &&
                u.version === s &&
                u.codeBlockIdx === r
                  ? { ...u, version: n }
                  : u,
              ) ?? [],
          ),
        )
    }
    async openDiffEditor(e, t) {
      const s = this.getComposer(e)
      if (!s) return
      const n = s.tabs.find(
        (o) => o.type === "code" && o.uri.toString() === t.toString(),
      )
      if (!n) return
      const r = this.editorService.findEditors({ typeId: Mit.ID, resource: t })
      if (r.length > 0) await this.editorService.openEditor(r[0].editor)
      else {
        const o = Date.now(),
          a = U.parse(`inmemory://diff/original/${o}`),
          l = this.languageService.createByLanguageNameOrFilepathOrFirstLine(
            null,
            n.uri,
            undefined,
          )
        if (!l) return
        const c = s.codeBlockData[t.toString()]?.find(
            (C) => C.version === n.version,
          ),
          u = (
            this.composerUtilsService.getCodeBlockLinesByDiff(
              s.composerId,
              t,
              c?.originalModelDiffWrtV0 ?? [],
            ) ?? []
          ).join(`
`),
          d = this.modelService.createModel(u, l, a),
          g = this.instantiationService.createInstance(
            x2,
            a,
            "Original",
            undefined,
            l.languageId,
            u,
          ),
          p = this.instantiationService.createInstance(
            U1,
            t,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
          ),
          m = this.composerDataService.getLatestCodeBlockVersion(
            s.composerId,
            t,
          ),
          b = n.version,
          y = this.instantiationService.createInstance(
            Mit,
            `Review: ${this.labelService.getUriBasenameLabel(t)}`,
            `${b + 1}/${m + 1}`,
            g,
            p,
            undefined,
          )
        await this.editorGroupsService.activeGroup.openEditor(y),
          y.register(this.D(d)),
          y.register(this.D(p)),
          y.register(
            this.D({
              dispose: () => {
                this.closeDiffEditor(t)
              },
            }),
          )
      }
    }
    async closeDiffEditor(e) {
      const t = this.editorService.findEditors({ typeId: Mit.ID, resource: e })
      for (const s of t) await this.editorService.closeEditor(s)
    }
    async openOrUpdateMultiDiffEditor(e) {
      const t = this.composerDataService.selectedComposer
      if (!t) return
      const s = this.composerUtilsService.constructDiffResources(t.composerId),
        n = this.editorService.findEditors({ typeId: fy.ID, resource: DBi })
      if (s.length === 0) {
        n.length > 0 &&
          (await this.editorService.closeEditor({
            editor: n[0].editor,
            groupId: this.editorGroupsService.activeGroup.id,
          }))
        return
      }
      const r = fy.fromResourceMultiDiffEditorInput(
        {
          label: "Review: Active Composer",
          resources: s,
          multiDiffSource: DBi,
        },
        this.instantiationService,
      )
      n.length > 0
        ? this.editorService.activeEditor === n[0].editor
          ? await this.editorService.replaceEditors(
              [{ editor: n[0].editor, replacement: r }],
              this.editorGroupsService.activeGroup,
            )
          : (await this.editorService.closeEditor({
              editor: n[0].editor,
              groupId: this.editorGroupsService.activeGroup.id,
            }),
            await this.editorService.openEditor(r, {
              inactive: !!e?.skipOpen,
              pinned: true,
            }))
        : e?.skipOpen ||
          (await this.editorService.openEditor(r, {
            inactive: !!e?.skipOpen,
            pinned: true,
          }))
    }
    showComposerHistory() {
      this.reactiveStorageService.setNonPersistentStorage(
        "composerState",
        "shouldShowComposerHistory",
        true,
      ),
        this.composerViewsService.getComposerLocation(
          this.composerDataService.selectedComposerId,
        ) !== "pane" && this.viewsService.openView(rI)
    }
    showChatHistory() {
      this.reactiveStorageService.setNonPersistentStorage(
        "composerState",
        "shouldShowChatHistory",
        true,
      ),
        this.composerViewsService.getComposerLocation(
          this.composerDataService.selectedChatId,
        ) === "editor" && this.viewsService.openView(LC)
    }
    async insertIntoChat(e, t) {
      this.updateComposer(e, { text: t.message, richText: t.message }),
        this.getInputDelegate(e).focus(),
        await this.submitChatMaybeAbortCurrent(
          this.composerDataService.selectedChatId,
          t.message,
          { usesCodebase: t.isCodebaseContext },
        )
    }
    async applyCachedCodeBlock(e, t, s, n) {
      const r = n?.applyToCurrentFile
        ? this.editorService.activeEditor?.resource
        : t
      if (!r) return
      let o = this.composerDataService.getComposerCodeBlock(e, t, s)
      if (
        !(!o || !o.isNotApplied) &&
        (o.uri.toString() !== r.toString() &&
          (s = this.composerUtilsService.changeCodeBlockUri(e, t, r, s)),
        (o = this.composerDataService.getComposerCodeBlock(e, r, s)),
        !!o)
      ) {
        if (
          (this.unregisterCachedCodeBlock(e, r, s),
          this.composerUnificationService.reactiveUnificationMode() !==
            "disabled")
        ) {
          if (o.status === "applying")
            await this.reactivateApplyingCodeBlock(e, o)
          else {
            let a = false
            const l = !!o.newModelDiffWrtV0,
              c =
                this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
                  (d) => d.uri.toString() === r.toString(),
                )?.id,
              h = await this.composerUtilsService.getContentsOfFile(e, r),
              u = this.composerUtilsService.getCodeBlockOriginalModelLines(
                e,
                r,
                s,
              )
            h &&
              u &&
              h.join(`
`) !==
                u.join(`
`) &&
              (a = true),
              l && !a
                ? c
                  ? await this.turnApplyToInlineDiff(e, t, s, {
                      shouldChain: true,
                    })
                  : await this.turnApplyToInlineDiff(e, t, s)
                : this.runFastApplyOnCodeBlock(e, o, { range: n?.range })
          }
          return
        }
        this.composerDataService.updateComposerCodeBlock(e, r, s, {
          newModelDiffWrtV0: undefined,
          originalModelDiffWrtV0: undefined,
          intermediateModelLines: undefined,
        }),
          this.runFastApplyOnCodeBlock(e, o, { range: n?.range })
      }
    }
    handleAiEditToolCallFinished() {
      this._onDidFinishAiEditToolCall.fire()
    }
    getDebugInfo() {
      return {
        shouldOpenNextAppliedFile: this._shouldOpenNextAppliedFile,
        composerEditingStates: this._composerEditingStates,
        isTurningCachedCodeBlocksToDiffs:
          this._isTurningCachedCodeBlocksToDiffs,
        fileWatchers: this._fileWatchers,
        uriToCachedCodeBlocks: this._uriToCachedCodeBlocks,
        uriToCachedCodeBlocksQueue: this._uriToCachedCodeBlocksQueue,
        composerApplyingDiffsState: this._composerApplyingDiffsState,
        ignoreChangesToContext: this._ignoreChangesToContext,
        fastApplyQueue: this._fastApplyQueue,
        settings: this.applicationComposerSettings,
      }
    }
    async formatDiffHistory(e, t, s, n) {
      if (s.getValueLength() > gxr) return
      const r =
        await this.everythingProviderService.onlyLocalProvider?.runCommand(
          l7.FormatDiffHistory,
          {
            uri: s.uri.toString(),
            changes: e.changes,
            behavior: { type: "whitespace compatible" },
            modelVersion: s.getVersionId(),
            eol: n,
          },
        )
      if (r === undefined)
        throw new Error("Format Diff History not registered in extension host")
      return r
    }
    async registerModelListenerToEditorModel(e, t) {
      const s = this.workspaceContextService.asRelativePath(t.uri)
      if (
        [
          "vscode-notebook-cell",
          "file",
          "vscode-remote",
          "untitled",
          "inmemory-anysphere",
        ].includes(t.uri.scheme)
      ) {
        if (
          (await this.everythingProviderService.onlyLocalProvider?.runCommand(
            l7.GetModelValue,
            { relativePath: s },
          )) === undefined
        ) {
          let r = t.getValue()
          if (r !== undefined) {
            const o =
              await this.everythingProviderService.onlyLocalProvider?.runCommand(
                l7.InitModel,
                {
                  relativePath: s,
                  currentModelValue: r,
                  modelVersion: t.getVersionId(),
                },
              )
          }
        }
        this.D(
          t.onDidChangeContent(async (r) => {
            try {
              await this.formatDiffHistory(r, e, t, t.getEOL())
            } catch (o) {
              console.error("[ComposerService] formatDiffHistory error", o)
            }
          }),
        )
      }
    }
    async registerEditorListenersToEditor(e) {
      const t = e.getId()
      this.editorListeners.set(t, [
        e.onDidDispose(() => {
          this.editorListeners.get(t)?.forEach((s) => s.dispose()),
            this.editorListeners.delete(t)
        }),
      ])
      try {
        this.editorListeners.has(t) || this.editorListeners.set(t, [])
        const s = e.getModel()
        s !== null && (await this.registerModelListenerToEditorModel(e, s)),
          this.editorListeners.has(t) || this.editorListeners.set(t, []),
          this.editorListeners.get(t).push(
            this.D(
              e.onDidChangeModel(() => {
                const n = e.getModel()
                n !== null && this.registerModelListenerToEditorModel(e, n)
              }),
            ),
          ),
          this.editorListeners.has(t) || this.editorListeners.set(t, [])
      } catch (s) {
        console.error("ComposerService: error", s)
      }
    }
    async initializeEditorListeners() {
      if (uxr) {
        for (
          let e = 0;
          e < 1e3 &&
          (await this.everythingProviderService.onlyLocalProvider?.runCommand(
            l7.Ack,
            null,
          )) !== true;
          e++
        )
          await new Promise((t) => setTimeout(t, 50))
        for (let e of this._codeEditorService.listCodeEditors())
          await this.registerEditorListenersToEditor(e)
        this.editorListeners.set("global", [
          this.D(
            this._codeEditorService.onCodeEditorAdd((e) => {
              this.registerEditorListenersToEditor(e)
            }),
          ),
        ])
      }
    }
    async applyCachedCodeBlocksOfLastMessage(e) {
      const t = this.composerDataService.getLastAiBubble(e)
      if (t)
        for (const s of t.codeBlocks ?? [])
          await this.applyCachedCodeBlock(e, s.uri, s.version)
    }
    clearText(e) {
      this.composerDataService.updateComposerData(e, {
        text: "",
        richText: "",
      }),
        this._onShouldForceText.fire({ composerId: e })
    }
    async onInlineDiffsLoadedHook(e) {
      const t = new Set()
      console.log("[balta] onInlineDiffsLoadedHook", e)
      for (const s of e) {
        if (
          s.composerId !== this.composerDataService.selectedComposerId ||
          t.has(s.uri.toString())
        )
          continue
        const n = await this.composerUtilsService.getContentsOfFile(
          s.composerId,
          s.uri,
        )
        if (!n) continue
        const r = await this.composerUtilsService.computeLineDiffs(
          s.composerId,
          s.uri,
          n,
        )
        this.composerDataService.updateComposerCodeBlock(
          s.composerId,
          s.uri,
          s.version,
          { newModelDiffWrtV0: r },
        )
        const o = this.textFileService.isDirty(s.uri)
        await this.turnApplyToInlineDiff(s.composerId, s.uri, s.version, {
          setOriginalModelLines: true,
        }),
          t.add(s.uri.toString()),
          o || (await this.saveFile(s.uri, { force: true }))
      }
    }
    focus(e, t) {
      this.composerViewsService.focus(e, t)
    }
    getComposerLocation(e) {
      return this.composerViewsService.getComposerLocation(e)
    }
    setComposerLocation(e, t) {
      this.composerViewsService.setComposerLocation(e, t)
    }
    getInputDelegate(e) {
      return this.composerViewsService.getInputDelegate(e)
    }
    getPrevEditingBubbleInputDelegate(e) {
      return this.composerViewsService.getPrevEditingBubbleInputDelegate(e)
    }
    hide(e) {
      this.composerViewsService.hide(e)
    }
    blur(e) {
      this.composerViewsService.blur(e)
    }
    focusPrevBubble(e) {
      this.composerViewsService.focusPrevBubble(e)
    }
    async showAndFocus(e, t) {
      await this.composerViewsService.showAndFocus(e, t)
    }
    isChat(e) {
      const t = this.getComposer(e)
      return this.composerDataService.getComposerForceMode(e) === "chat"
    }
    parseComposerContextId(e) {
      const t = e.split(":")
      return t.length > 1
        ? { composerId: t[0], bubbleId: t[1] }
        : { composerId: e }
    }
    async onAddContext(e) {
      let t
      if (!e.id) return
      const s = this.parseComposerContextId(e.id)
      s === undefined ||
        s.composerId !== this.composerDataService.selectedComposerId ||
        ((t = s.bubbleId), await this.updateTokenCountOfCurrentComposer(t))
    }
    async onRemoveContext(e) {
      let t
      if (!e.id) return
      const s = this.parseComposerContextId(e.id)
      s === undefined ||
        s.composerId !== this.composerDataService.selectedComposerId ||
        ((t = s.bubbleId), await this.updateTokenCountOfCurrentComposer(t))
    }
    async updateTokenCountOfCurrentComposer(e) {
      if (this.shouldIgnoreTokenCountUpdate) return
      const t = this.composerDataService.selectedComposerId,
        s = this.composerDataService.getComposerData(t)
      if (!s) return
      e !== undefined && this.updateTokenCountOfCurrentComposer()
      const r = (
        e
          ? s.conversation.slice(
              0,
              s.conversation.findIndex((h) => h.bubbleId === e) + 1,
            )
          : s.conversation
      ).flatMap((h) => h.context?.fileSelections ?? [])
      if (!e) {
        const h = s.context.fileSelections
        r.push(...h)
      }
      const o = ice(r, "fileSelections"),
        a = `${t}${e ? `:${e}` : ""}`,
        l = this.tokenCounterAbortControllerMap.get(a)
      l && l.abort()
      let c = new l2i()
      if (o.length !== 0) {
        const h = new AbortController()
        this.tokenCounterAbortControllerMap.set(a, h)
        const u = new a2i({
          modelName:
            this.reactiveStorageService.applicationUserPersistentStorage
              .aiSettings.composerModel ?? undefined,
          contextItems: await Promise.all(
            o.map(async (d) => {
              let g
              try {
                g = await this.textModelService.createModelReference(
                  U.from(d.uri),
                )
                const m = g.object.textEditorModel.getLinesContent()
                return {
                  item: {
                    case: "fileChunk",
                    value: {
                      relativeWorkspacePath: d.uri.path,
                      chunkContents: m.join(`
`),
                      startLineNumber: 0,
                    },
                  },
                }
              } finally {
                g?.dispose()
              }
            }) || [],
          ),
        })
        if (
          ((c = await this.aiService.countTokens(u, { signal: h.signal })),
          h.signal.aborted)
        ) {
          this.tokenCounterAbortControllerMap.delete(a)
          return
        }
        this.tokenCounterAbortControllerMap.delete(a)
      }
      e
        ? this.composerDataService.updateComposerBubble(t, e, {
            tokenDetailsUpUntilHere: c.tokenDetails,
            tokenCountUpUntilHere: c.count,
          })
        : (this.composerDataService.updateComposerDataSetStore(t, (h) =>
            h("tokenCount", c.count),
          ),
          this.composerDataService.updateComposerDataSetStore(t, (h) =>
            h("tokenDetails", c.tokenDetails),
          ))
    }
    async updateComposerSummaryIfOutdated(e) {
      const t = await this.composerDataService.getComposerDataHandle(e)
      try {
        if (!t) return
        const s = t.data.conversation.at(-1)?.bubbleId
        if (
          !s ||
          !this.selectedContextService.shouldUpdateConversationSummary(t.data)
        )
          return
        try {
          const n = await this.chatClient.get(),
            r = await this.repositoryService.getNewRepoInfo(),
            o =
              r && this.repositoryService.isIndexedMainLocalRepository()
                ? new rl(r)
                : undefined,
            a = this.composerDataService.getComposerUnifiedMode(e),
            l = [...t.data.conversation]
              .reverse()
              .map((y) => y.conversationSummary)
              .filter((y) => y !== undefined)[0],
            c = l?.clientShouldStartSendingFromInclusiveBubbleId
          let h = c
            ? t.data.conversation.findIndex(
                (y) => (y.serverBubbleId ?? y.bubbleId) === c,
              )
            : 0
          h === -1 && (h = 0)
          const u = t.data.conversation.slice(h),
            d =
              await this.composerUtilsService.populateCodeChunksInConversation(
                u,
                a === "chat",
              ),
            g =
              await this.composerUtilsService.populateConversationWithExtraContext(
                d,
                e,
              )
          let p = a === "chat" ? "regular-chat" : "composer"
          this.composerUnificationService.reactiveUnificationMode() !==
            "disabled" && (p = "composer")
          const m = this.getModelDetails(p),
            b = await n.getConversationSummary({
              conversation: g,
              fullConversationHeadersOnly: t.data.conversation.map((y) => ({
                bubbleId: y.bubbleId,
                serverBubbleId: y.serverBubbleId,
                type: y.type,
              })),
              conversationSummary: l,
              conversationId: e,
              repositoryInfo: o,
              isAgentic: this.composerDataService.getComposerIsAgentic(e),
              modelDetails: m,
            })
          this.composerDataService.updateComposerDataSetStore(e, (y) =>
            y("latestConversationSummary", { summary: b, lastBubbleId: s }),
          )
        } catch (n) {
          console.error("[composer] Error getting conversation summary:", n)
        }
      } finally {
        t?.dispose()
      }
    }
    getModelDiffStateManager() {
      return this._modelDiffStateManager
    }
  }
__decorate(
  [At("ComposerService.updateComposer")],
  Sn.prototype,
  "updateComposer",
  null,
),
  __decorate(
    [At("ComposerService.getComposer")],
    Sn.prototype,
    "getComposer",
    null,
  ),
  __decorate(
    [At("ComposerService.getComposerEditingState")],
    Sn.prototype,
    "getComposerEditingState",
    null,
  ),
  __decorate(
    [At("ComposerService.getApplyingDiffsState")],
    Sn.prototype,
    "getApplyingDiffsState",
    null,
  ),
  __decorate(
    [At("ComposerService.resetComposerEditingState")],
    Sn.prototype,
    "resetComposerEditingState",
    null,
  ),
  __decorate(
    [At("ComposerService.unregisterCachedCodeBlock")],
    Sn.prototype,
    "unregisterCachedCodeBlock",
    null,
  ),
  __decorate(
    [At("ComposerService.unregisterAllCachedCodeBlocks")],
    Sn.prototype,
    "unregisterAllCachedCodeBlocks",
    null,
  ),
  __decorate(
    [At("ComposerService.registerCachedCodeBlock")],
    Sn.prototype,
    "registerCachedCodeBlock",
    null,
  ),
  __decorate(
    [At("ComposerService.markUriAsOutdated")],
    Sn.prototype,
    "markUriAsOutdated",
    null,
  ),
  __decorate(
    [At("ComposerService.isNewFile")],
    Sn.prototype,
    "isNewFile",
    null,
  ),
  __decorate(
    [At("ComposerService.createNewFileAndMaybeFolder")],
    Sn.prototype,
    "createNewFileAndMaybeFolder",
    null,
  ),
  __decorate(
    [At("ComposerService.checkToCreateNewFile")],
    Sn.prototype,
    "checkToCreateNewFile",
    null,
  ),
  __decorate(
    [At("ComposerService.deleteFolder")],
    Sn.prototype,
    "deleteFolder",
    null,
  ),
  __decorate(
    [At("ComposerService.deleteFile")],
    Sn.prototype,
    "deleteFile",
    null,
  ),
  __decorate(
    [At("ComposerService.deleteNewFileAndMaybeFolder")],
    Sn.prototype,
    "deleteNewFileAndMaybeFolder",
    null,
  ),
  __decorate(
    [At("ComposerService.removeFileFromNewlyCreatedFilesAndFolders")],
    Sn.prototype,
    "removeFileFromNewlyCreatedFilesAndFolders",
    null,
  ),
  __decorate(
    [At("ComposerService.saveFiles")],
    Sn.prototype,
    "saveFiles",
    null,
  ),
  __decorate([At("ComposerService.saveFile")], Sn.prototype, "saveFile", null),
  __decorate(
    [At("ComposerService.cleanUpComposer")],
    Sn.prototype,
    "cleanUpComposer",
    null,
  ),
  __decorate(
    [At("ComposerService.resetComposer")],
    Sn.prototype,
    "resetComposer",
    null,
  ),
  __decorate(
    [At("ComposerService.isComposerContextUntouched")],
    Sn.prototype,
    "isComposerContextUntouched",
    null,
  ),
  __decorate(
    [At("ComposerService.isComposerUntouched")],
    Sn.prototype,
    "isComposerUntouched",
    null,
  ),
  __decorate(
    [At("ComposerService.canComposerSubmit")],
    Sn.prototype,
    "canComposerSubmit",
    null,
  ),
  __decorate([At("ComposerService.close")], Sn.prototype, "close", null),
  __decorate(
    [At("ComposerService.handleOpenComposerPane")],
    Sn.prototype,
    "handleOpenComposerPane",
    null,
  ),
  __decorate(
    [At("ComposerService.handleOpenComposerEditor")],
    Sn.prototype,
    "handleOpenComposerEditor",
    null,
  ),
  __decorate(
    [At("ComposerService.handleOpenComposerBar")],
    Sn.prototype,
    "handleOpenComposerBar",
    null,
  ),
  __decorate(
    [At("ComposerService.handleOpenComposer")],
    Sn.prototype,
    "handleOpenComposer",
    null,
  ),
  __decorate(
    [At("ComposerService.openComposer")],
    Sn.prototype,
    "openComposer",
    null,
  ),
  __decorate(
    [At("ComposerService.createComposer")],
    Sn.prototype,
    "createComposer",
    null,
  ),
  __decorate(
    [At("ComposerService.deleteComposer")],
    Sn.prototype,
    "deleteComposer",
    null,
  ),
  __decorate([At("ComposerService.saveAll")], Sn.prototype, "saveAll", null),
  __decorate(
    [At("ComposerService.maybeUpdateFileSelectionsFromCmdI")],
    Sn.prototype,
    "maybeUpdateFileSelectionsFromCmdI",
    null,
  ),
  __decorate(
    [At("ComposerService.getCurrentFile")],
    Sn.prototype,
    "getCurrentFile",
    null,
  ),
  __decorate(
    [At("ComposerService.getInlineDiffServiceLookalikePure")],
    Sn.prototype,
    "getInlineDiffServiceLookalikePure",
    null,
  ),
  __decorate(
    [At("ComposerService.isCodeBlockRegisteredAsCached")],
    Sn.prototype,
    "isCodeBlockRegisteredAsCached",
    null,
  ),
  __decorate(
    [At("ComposerService.getTerminalText")],
    Sn.prototype,
    "getTerminalText",
    null,
  ),
  __decorate(
    [At("ComposerService.addContext")],
    Sn.prototype,
    "addContext",
    null,
  ),
  __decorate(
    [At("ComposerService.removeAllListContext")],
    Sn.prototype,
    "removeAllListContext",
    null,
  ),
  __decorate(
    [At("ComposerService.removeContext")],
    Sn.prototype,
    "removeContext",
    null,
  ),
  __decorate(
    [At("ComposerService.removeMention")],
    Sn.prototype,
    "removeMention",
    null,
  ),
  __decorate(
    [At("ComposerService.addBubbleContext")],
    Sn.prototype,
    "addBubbleContext",
    null,
  ),
  __decorate(
    [At("ComposerService.removeBubbleContext")],
    Sn.prototype,
    "removeBubbleContext",
    null,
  ),
  __decorate(
    [At("ComposerService.removeBubbleMention")],
    Sn.prototype,
    "removeBubbleMention",
    null,
  ),
  __decorate(
    [At("ComposerService.resetContext")],
    Sn.prototype,
    "resetContext",
    null,
  ),
  __decorate(
    [At("ComposerService.addContextToLastFocused")],
    Sn.prototype,
    "addContextToLastFocused",
    null,
  ),
  __decorate(
    [At("ComposerService.checkoutToCheckpoint")],
    Sn.prototype,
    "checkoutToCheckpoint",
    null,
  ),
  __decorate(
    [At("ComposerService.checkoutToLatest")],
    Sn.prototype,
    "checkoutToLatest",
    null,
  ),
  __decorate(
    [At("ComposerService.syncComposerWorktreeBranch")],
    Sn.prototype,
    "syncComposerWorktreeBranch",
    null,
  ),
  __decorate(
    [At("ComposerService.checkIfBackgroundComposerIsCorrupted")],
    Sn.prototype,
    "checkIfBackgroundComposerIsCorrupted",
    null,
  ),
  __decorate(
    [At("ComposerService.isBackground")],
    Sn.prototype,
    "isBackground",
    null,
  ),
  __decorate(
    [At("ComposerService.getModelDetails")],
    Sn.prototype,
    "getModelDetails",
    null,
  ),
  __decorate(
    [At("ComposerService.showInfoBox")],
    Sn.prototype,
    "showInfoBox",
    null,
  ),
  __decorate(
    [At("ComposerService.getAllCachedCodeBlocks")],
    Sn.prototype,
    "getAllCachedCodeBlocks",
    null,
  ),
  __decorate(
    [At("ComposerService.readFileContents")],
    Sn.prototype,
    "readFileContents",
    null,
  ),
  __decorate(
    [At("ComposerService.getSortedCandidateFiles")],
    Sn.prototype,
    "getSortedCandidateFiles",
    null,
  ),
  __decorate(
    [At("ComposerService.shouldRenameComposer")],
    Sn.prototype,
    "shouldRenameComposer",
    null,
  ),
  __decorate(
    [At("ComposerService.renameComposer")],
    Sn.prototype,
    "renameComposer",
    null,
  ),
  __decorate(
    [At("ComposerService.maybeRunOnComposerSettled")],
    Sn.prototype,
    "maybeRunOnComposerSettled",
    null,
  ),
  __decorate(
    [At("ComposerService.isComposerSettled")],
    Sn.prototype,
    "isComposerSettled",
    null,
  ),
  __decorate(
    [At("ComposerService.onComposerSettled")],
    Sn.prototype,
    "onComposerSettled",
    null,
  ),
  __decorate(
    [At("ComposerService.registerNewCodeBlock")],
    Sn.prototype,
    "registerNewCodeBlock",
    null,
  ),
  __decorate(
    [At("ComposerService.updateCodeBlockVersion")],
    Sn.prototype,
    "updateCodeBlockVersion",
    null,
  ),
  __decorate(
    [At("ComposerService.openDiffEditor")],
    Sn.prototype,
    "openDiffEditor",
    null,
  ),
  __decorate(
    [At("ComposerService.closeDiffEditor")],
    Sn.prototype,
    "closeDiffEditor",
    null,
  ),
  __decorate(
    [At("ComposerService.openOrUpdateMultiDiffEditor")],
    Sn.prototype,
    "openOrUpdateMultiDiffEditor",
    null,
  ),
  __decorate(
    [At("ComposerService.showComposerHistory")],
    Sn.prototype,
    "showComposerHistory",
    null,
  ),
  __decorate(
    [At("ComposerService.showChatHistory")],
    Sn.prototype,
    "showChatHistory",
    null,
  ),
  __decorate(
    [At("ComposerService.insertIntoChat")],
    Sn.prototype,
    "insertIntoChat",
    null,
  ),
  __decorate(
    [At("ComposerService.applyCachedCodeBlock")],
    Sn.prototype,
    "applyCachedCodeBlock",
    null,
  ),
  __decorate(
    [At("ComposerService.handleAiEditToolCallFinished")],
    Sn.prototype,
    "handleAiEditToolCallFinished",
    null,
  ),
  __decorate(
    [At("ComposerService.getDebugInfo")],
    Sn.prototype,
    "getDebugInfo",
    null,
  ),
  __decorate(
    [At("ComposerService.formatDiffHistory")],
    Sn.prototype,
    "formatDiffHistory",
    null,
  ),
  __decorate(
    [At("ComposerService.registerModelListenerToEditorModel")],
    Sn.prototype,
    "registerModelListenerToEditorModel",
    null,
  ),
  __decorate(
    [At("ComposerService.registerEditorListenersToEditor")],
    Sn.prototype,
    "registerEditorListenersToEditor",
    null,
  ),
  __decorate(
    [At("ComposerService.initializeEditorListeners")],
    Sn.prototype,
    "initializeEditorListeners",
    null,
  ),
  __decorate(
    [At("ComposerService.applyCachedCodeBlocksOfLastMessage")],
    Sn.prototype,
    "applyCachedCodeBlocksOfLastMessage",
    null,
  ),
  __decorate(
    [At("ComposerService.onInlineDiffsLoadedHook")],
    Sn.prototype,
    "onInlineDiffsLoadedHook",
    null,
  ),
  __decorate([At("ComposerService.focus")], Sn.prototype, "focus", null),
  __decorate(
    [At("ComposerService.getComposerLocation")],
    Sn.prototype,
    "getComposerLocation",
    null,
  ),
  __decorate(
    [At("ComposerService.setComposerLocation")],
    Sn.prototype,
    "setComposerLocation",
    null,
  ),
  __decorate(
    [At("ComposerService.getInputDelegate")],
    Sn.prototype,
    "getInputDelegate",
    null,
  ),
  __decorate(
    [At("ComposerService.getPrevEditingBubbleInputDelegate")],
    Sn.prototype,
    "getPrevEditingBubbleInputDelegate",
    null,
  ),
  __decorate([At("ComposerService.hide")], Sn.prototype, "hide", null),
  __decorate([At("ComposerService.blur")], Sn.prototype, "blur", null),
  __decorate(
    [At("ComposerService.focusPrevBubble")],
    Sn.prototype,
    "focusPrevBubble",
    null,
  ),
  __decorate(
    [At("ComposerService.showAndFocus")],
    Sn.prototype,
    "showAndFocus",
    null,
  ),
  __decorate(
    [At("ComposerService.updateComposerSummary")],
    Sn.prototype,
    "updateComposerSummaryIfOutdated",
    null,
  ),
  (Sn = __decorate(
    [
      __param(0, ei),
      __param(1, Z),
      __param(2, it),
      __param(3, Br),
      __param(4, Xt),
      __param(5, u0),
      __param(6, x5),
      __param(7, oy),
      __param(8, nt),
      __param(9, ve),
      __param(10, cursorCredsService),
      __param(11, si),
      __param(12, Ce),
      __param(13, Ci),
      __param(14, Md),
      __param(15, Gi),
      __param(16, Na),
      __param(17, $h),
      __param(18, nl),
      __param(19, Vo),
      __param(20, M_),
      __param(21, NI),
      __param(22, selectedContextService),
      __param(23, aiFeatureStatusService),
      __param(24, everythingProviderService),
      __param(25, aiAssertService),
      __param(26, YC),
      __param(27, fr),
      __param(28, ue),
      __param(29, qi),
      __param(30, Hi),
      __param(31, cS),
      __param(32, es),
      __param(33, uue),
      __param(34, composerUtilsService),
      __param(35, yi),
      __param(36, QJ),
      __param(37, qgs),
      __param(38, _C),
      __param(39, mo),
      __param(40, kYe),
      __param(41, wY),
      __param(42, f5),
      __param(43, xHt),
      __param(44, Ul),
      __param(45, fn),
      __param(46, vk),
      __param(47, RYe),
    ],
    Sn,
  )),
  Ve(Pa, Sn, 1)
}
