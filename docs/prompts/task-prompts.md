# Writing task prompts

SperaxOS development uses structured task prompts, one Markdown file per task. Each file has the same sections so an agent can execute it without exploring:

1. Title
2. **Context**: why the task exists.
3. **Prerequisites**: tasks and environment required first.
4. **Scope**: files to create, files to modify, files **not** to touch.
5. **Implementation**: concrete steps.
6. Verification and done condition.

Guidelines:

- Name exact file paths and the pattern to copy.
- State the done condition as something checkable.
- List what must not change; agents otherwise widen scope.
- Keep one task per prompt.

The upstream format is [PROMPT-SPEC.md](https://github.com/nirholas/sperax/blob/main/docs/PROMPT-SPEC.md); examples live in [docs/prompts](https://github.com/nirholas/sperax/tree/main/docs/prompts).
