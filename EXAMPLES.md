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
