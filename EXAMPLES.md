# Worked example: a full IB Extended Essay, start to finish

A realistic sequence of skills from this list, chained together for one IB
Extended Essay (EE) — from a rough research question to a submission-ready
draft. Each step names one entry already in [README.md](README.md); install
whichever ones you need for your agent (see
[Compatibility Paths](README.md#compatibility-paths)) and run them in order.

This isn't the only valid path — swap in whatever overlapping entry fits your
workflow (see the notes under [IB & IGCSE Coursework](README.md#ib--igcse-coursework)
and [Study & Productivity](README.md#study--productivity) for alternatives) —
but it shows how the pieces are meant to connect rather than be used in
isolation.

---

## 1. Orient the research question

Start with a broad topic and narrow it into an answerable EE research
question, grounded in what's actually been written on it.

- **[alirezarezvani/claude-skills - research/litreview](https://github.com/alirezarezvani/claude-skills/tree/main/research/litreview)** turns your rough research question into a planned mini literature review, as a Word document you can skim for gaps and angles.
- Alternative: **[davila7/claude-code-templates - literature-review](https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/scientific/literature-review)** runs a more systematic search across academic databases with formatted citations if your subject needs deeper source coverage.

## 2. Draft

With a question and a reading list in hand, start writing.

- **[anthropics/doc-coauthoring](https://officialskills.sh/anthropics/skills/doc-coauthoring)** is built for collaborative document editing and co-authoring — useful even solo, for iterating on an EE draft section by section with your agent rather than generating the whole thing in one pass.

## 3. Format citations

Before you circulate a draft to your supervisor, get the citations into
shape rather than fixing them by hand at the end.

- **[saulmcphd/apa-style](https://github.com/saulmcphd/apa-style)** proofreads the draft against APA 7th edition rules with inline corrections. (Swap for whatever citation style your subject/school requires — this is the one already on the list.)

## 4. Rehearse the viva voce

IB EEs end with a short reflective viva. Rehearse it before the real thing.

- **[dbosk/introagents - honor-defense-prep](https://github.com/dbosk/introagents/tree/main/students/event-202605/skills/honor-defense-prep)** rehearses defending your own submission through examiner-style questions, standing in for the viva conversation.

---

That's four skills, four short sessions, one EE — research question to a
draft you can hand to your supervisor with citations already in shape and
the viva already rehearsed once.

Have a different sequence that works well for a specific subject or
curriculum? Open a PR adding it here, or start a thread in
[Discussions](https://github.com/StudentSuite/awesome-skills-plugins-for-students/discussions).

---

## Worked example: a first CS side project, from git init to a job application

A second chain, this time for [Coding & CS Education](README.md#coding--cs-education)
and [College Applications & Career](README.md#college-applications--career) —
from a beginner's first commit on a side project to using that project in a
real application. Same idea as the EE walkthrough above: each step names one
entry already in [README.md](README.md), install whichever ones you need (see
[Compatibility Paths](README.md#compatibility-paths)), and run them in order.

### 1. Set up version control

Before an AI agent touches the code, get save points in place so a bad edit
is never unrecoverable.

- **[rwgb/vibe-guardrails - save-points](https://github.com/rwgb/vibe-guardrails/tree/main/skills/save-points)** explains git from zero — what a commit/branch/remote is, and the save-before-every-AI-request habit.

### 2. Build with tests

Write the project's first features test-first rather than bolting tests on
afterward.

- **[mattpocock/skills - tdd](https://github.com/mattpocock/skills/tree/main/skills/engineering/tdd)** guides red-green-refactor cycles focused on behavior, not implementation details.

### 3. Debug what breaks

Something will fail. Work the failure with a disciplined loop instead of
guessing.

- **[mattpocock/skills - diagnosing-bugs](https://github.com/mattpocock/skills/tree/main/skills/engineering/diagnosing-bugs)** reproduces, minimizes, hypothesizes, instruments, then fixes.

### 4. Ship it as launch-ready

Once the project works, turn it from a personal script into something a
reviewer can actually look at.

- **[CreativesLibrary/oss-launch](https://github.com/CreativesLibrary/oss-launch)** scaffolds the README, LICENSE, CI config, and a launch plan.
- **[davila7/claude-code-templates - interactive-portfolio](https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/creative-design/interactive-portfolio)** turns it (and your other projects) into a portfolio site to link from applications.

### 5. Put it on the application

Turn the shipped project into application material, then get ready to talk
about it.

- **[ComposioHQ/awesome-claude-skills - tailored-resume-generator](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/tailored-resume-generator)** tailors your resume to highlight the project against a specific job or internship posting.
- **[sourikduttanyu/interview-prep](https://github.com/sourikduttanyu/interview-prep)** builds an interview prep kit from that resume and posting, so the project's design decisions are rehearsed before anyone asks about them.

---

That's six skills, one side project, from `git init` to an interview where
you can actually explain what you built and why.

---

## Worked example: a grad-school application, cold outreach to a funded offer

A third chain, for [College Applications & Career](README.md#college-applications--career) —
from not knowing anyone in the field to an admissions interview for a funded
program. Same idea as the two walkthroughs above: each step names one entry
already in [README.md](README.md), install whichever ones you need (see
[Compatibility Paths](README.md#compatibility-paths)), and run them in order.

### 1. Find people to talk to

Before you write a word of the application, talk to people already in the
field so the application reflects a real understanding of the program, not a
guess.

- **[noamseg/interview-coach-skill](https://github.com/noamseg/interview-coach-skill)** coaches the cold networking outreach: finding potential advisors or current students, and drafting the informational-interview ask itself.

### 2. Draft the statement of purpose

With a clearer sense of the field and the program, turn that into a draft.

- **[Haadhi76/SOP_Consultant](https://github.com/Haadhi76/SOP_Consultant)** drafts and critiques the statement of purpose using genre-analysis research into what actually reads well.

### 3. Pitch it for funding

An application is stronger with funding already scoped rather than left as an
afterthought.

- **[borghei/Claude-Skills - research/grants](https://github.com/borghei/Claude-Skills/tree/main/research/grants)** structures a scholarship or grant pitch around fit, narrative, and budget instead of boilerplate.

### 4. Rehearse the admissions interview

Once the application is in, rehearse the conversation before it happens for
real.

- **[sourikduttanyu/interview-prep](https://github.com/sourikduttanyu/interview-prep)** builds a tailored prep kit from the SOP and program details, so the same narrative holds up under questioning.

---

That's four skills, one application, from a cold email to an interview for a
program you can already speak about like you belong there.
