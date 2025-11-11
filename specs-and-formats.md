# Specs and Formats

This file defines the exact script formats and JSON output structures for the HAZE AI Storyboard Studio.

AVAILABLE FORMAT OPTIONS

Choose the format that best suits the content topic:

FORMAT 1: Short-Form Talking Head (60-90 seconds)
Best for: Quick tips, daily motivation, single-concept explanations Platform: YouTube Shorts, TikTok, Instagram Reels

FORMAT 2: Conversational Dialogue (90 seconds - 3 minutes)
Best for: Breaking down complex topics through natural conversation Platform: YouTube Shorts, Instagram Reels, YouTube Hosts: HAZE + FRANCIS

FORMAT 3: Tutorial/How-To (3-5 minutes)
Best for: Step-by-step tool demonstrations, practical workflows Platform: YouTube, Instagram Reels (if under 90 seconds)

FORMAT 4: Story-Driven Lesson (3-5 minutes)
Best for: Emotional connection, illustrating principles through narrative Platform: YouTube Framework: Hero's Journey or case study structure

FORMAT 5: Absurdist/Comedy (60-90 seconds)
Best for: Memorable analogies, making complex ideas stick through humor Platform: TikTok, Instagram Reels, YouTube Shorts

FORMAT 6: Structured Show/Series Episode (8-10 minutes)
Best for: In-depth educational content, establishing authority, lead generation Platform: YouTube long-form only Structure: 6-segment replicated format for consistent series branding


## OUTPUT FORMAT FOR CONTENT RECOMMENDATIONS FOR [Date/Week] ##

### TRENDING TOPICS

1. **[Date/Week]**

2. **[Topic]**
   - Source: [Platform/link]
   - Why Trending: [Brief explanation]
   - Audience Relevance: [Why they care]
   - Metrics: [If available]

[Repeat for 3-5 topics]

### PAIN POINTS & REAL QUESTIONS
1. **Pain Point**: [Specific struggle]
   - Source: [Platform/link]
   - Quote: "[Direct quote]"
   - Content Angle: [How HAZE addresses this]

[Repeat for 3-5 pain points]

### EMERGING AI TOOLS
1. **[Tool Name]**
   - What It Does: [One sentence]
   - Why Now: [Relevance]
   - Beginner-Friendly: [Easy/Medium/Complex]
   - Use Case: [Application for audience]

[Repeat for 2-3 tools]

### COMPETITOR GAP ANALYSIS
- What Competitors Cover: [Summary]
- What They Miss: [Opportunity]
- Our Unique Angle: [Our approach]

### RECOMMENDED PRIORITY
**HIGH** (This week):
1. [Topic] - [Reason]
2. [Topic] - [Reason]

**MEDIUM** (Next week):
1. [Topic] - [Reason]

**BACKLOG** (Future):
1. [Topic] - [Reason]

### FORMAT RECOMMENDATIONS
For each high-priority topic:
- Format: [Talking head/Dialogue/Tutorial/Story/Show]
- Length: [Duration]
- Hook: [Click angle]


## Script Formats

[MANDATORY OUTPUT FORMAT

You MUST follow one of the six approved content structure examples provided in this document. 

Each video output must include:
PART 1: KEY ART / THUMBNAIL IMAGE PROMPT
One single, powerful, detailed prompt for AI image generation
Designed to maximize click-through rate
Must follow the "Mandatory Cinematic Structure"
PART 2: SCENE-BY-SCENE PRODUCTION BLUEPRINT
For each scene (approximately 8 seconds each):
## SCENE [Number]

**Start Image Prompt:** [Detailed cinematic image prompt following Mandatory Cinematic Structure]

**Setting:** [Professional, ALL CAPS scene heading]

**Action/Dialogue:** [Present-tense description of action and dialogue]

**Nested JSON Prompt:**
{
  "id": "[unique_scene_identifier]",
  "aspect_ratio": "16:9",
  "duration": "8s",
  "prompt": "[Complete technical prompt with all cinematic details, including negative prompts]",
  "character_consistency": "[Reference to character image prompt for continuity]",
  "audio_cue": "[Voiceover or sound design notes]"
}



---

### Transition from Scene [Number] to [Next Number]
> [Concise, professional transition prompt in ALL CAPS]

MANDATORY CINEMATIC STRUCTURE FOR ALL IMAGE PROMPTS
Every image prompt (thumbnail AND scene start images) must include:
Third-Person Perspective: Reference characters by name ("HAZE" or "Francis")
Technical & Quality Descriptors: "ultra-detailed, 8K photorealistic, cinematic still-frame of HAZE..."
Subject & Character Details: Emotional state, clothing, specific actions
Environment & Context: Rich sensory detail of setting/background
Cinematic Lighting: Specific professional lighting instructions
Visual Style & Focus: "Extreme close-up with very blurry background (shallow depth of field)"
Final Artistic Touches: "Volumetric lighting, intense visible film grain, cinematic composition"
Negative Prompts: Always include to avoid cartoon/anime/illustration styles
CHARACTER CONSISTENCY REQUIREMENTS
Physical appearance must remain consistent across all scenes
Maintain costume continuity unless narrative requires change
Lighting progression should mirror emotional journey when appropriate
Reference the original character image prompt in each scene's JSON for continuity
VISUAL STYLE GUIDELINES
Aesthetic: Ultra-realistic, cinematic, professional (not cartoon or anime)
Lighting: Dramatic but natural; use volumetric lighting, ray tracing, HDR
Composition: Follow rule of thirds, use depth of field strategically
Color Grading: Professional color correction (specify mood: warm/cool/neutral)
Background: Very blurry backgrounds to maintain focus on subjects (shallow depth of field)
Resolution: Always specify 8K, photorealistic, masterpiece quality

CRITICAL TECHNICAL REQUIREMENTS

8-Second Segments: All scenes must be designed for 8-second video generation
JSON Format: All prompts must be outputted as properly formatted, nested JSON
Negative Prompts: Always include to prevent unwanted styles (cartoon, anime, illustration, low quality, distorted faces, unrealistic lighting)
Character References: Include character image prompt IDs for consistency
Transition Prompts: Provide clear technical instructions for connecting 8-second clips

Audio Cues: Specify voiceover content, sound effects, music mood for each scene
]

## JSON Output Structures

[**Nested JSON Prompt:**
{
  "id": "[unique_scene_identifier]",
  "aspect_ratio": "16:9",
  "duration": "8s",
  "prompt": "[Complete technical prompt with all cinematic details, including negative prompts]",
  "character_consistency": "[Reference to character image prompt for continuity]",
  "audio_cue": "[Voiceover or sound design notes]"
}
]

# OUTPUT FORMAT FOR CONTENT ASSET VISUAL PRODUCTION PACKAGE: 

[Video Title]

---

## PART 1: KEY ART / THUMBNAIL IMAGE PROMPT

### Thumbnail Concept
[Brief description from script]

### Thumbnail Image Generation Prompt

[Single detailed paragraph following Mandatory Cinematic Structure below, designed for maximum click-through rate]

---

## PART 2: SCENE-BY-SCENE PRODUCTION BLUEPRINT

### SCENE 1: [Scene Name from Script]

**Duration**: [Approximately X seconds]

**Setting**: [ALL CAPS scene heading from script]

**Action/Dialogue**: [Present-tense description from script]

**Start Image Prompt** (Primary Still Frame):

[Detailed cinematic paragraph following Mandatory Cinematic Structure, including all technical specifications and negative prompts]

**Nested JSON Prompt for Video Generation**:

{
  "id": "scene_1_[descriptive_identifier]",
  "aspect_ratio": "16:9",
  "duration": "8s",
  "platform_target": ["YouTube Shorts", "Instagram Reels", "TikTok"],
  "prompt": "[Complete technical prompt with character details, environment, lighting, camera angle, movement, visual style, and all cinematic specifications. Include: 'Cinematic, photorealistic, 8K resolution, ultra-detailed, volumetric lighting, ray tracing, HDR, very blurry background (shallow depth of field), film grain, professional color grading, masterpiece quality.' End with negative prompt: '--negative prompt: cartoon, anime, illustration, painting, 3d render, low quality, blurry, distorted faces, deformed hands, oversaturated, unrealistic lighting, multiple heads, duplicate body parts']",
  "character_reference": "[HAZE / FRANCIS with specific visual details for consistency]",
  "audio_cue": "[Voiceover text or sound design notes]",
  "on_screen_text": "[Any text overlay that appears in this scene]"
}


[IF SCENE EXCEEDS 8 SECONDS, BREAK INTO SEGMENTS]
SCENE 1A (0:00-0:08)
[Follow same format as above]
SCENE 1B (0:08-0:16)
[Follow same format as above]
Transition Prompt from Scene 1A to 1B:
SMOOTH CROSS-FADE TRANSITION OVER 0.5 SECONDS. MAINTAIN CHARACTER POSITION AND LIGHTING CONTINUITY. BACKGROUND SHIFTS FROM [DESCRIPTION] TO [DESCRIPTION].

TRANSITION FROM SCENE 1 TO SCENE 2
[Concise, professional transition in ALL CAPS with specific technical instructions]

SCENE 2: [Scene Name from Script]
[Repeat full format from Scene 1]

[Continue for all scenes in script]

### MANDATORY CINEMATIC STRUCTURE FOR ALL IMAGE PROMPTS

Every image prompt (thumbnail AND each scene's Start Image Prompt) must be written as a **single detailed paragraph** including these elements in order:

1. **Third-Person Perspective**: Reference characters by name ("HAZE" or "Francis")

2. **Technical Quality Descriptors**: Begin with: "Ultra-detailed, 8K photorealistic, cinematic still-frame of [CHARACTER]..."

3. **Subject & Character Details**: 
   - Physical description for consistency
   - Emotional state/expression
   - Clothing/costume
   - Specific action or pose relevant to scene

4. **Environment & Context**: 
   - Rich sensory detail of setting
   - Background elements
   - Props or objects in scene

5. **Cinematic Lighting**: 
   - Specific professional lighting setup
   - Light direction and quality
   - Shadows and highlights
   - Examples: "Soft key light from 45-degree angle, subtle rim light for depth, warm golden hour ambient fill"

6. **Camera & Composition**:
   - Shot type (extreme close-up, medium shot, wide shot, etc.)
   - Camera angle (eye-level, low-angle, high-angle, Dutch angle)
   - Framing and rule of thirds
   - Examples: "Extreme close-up with very blurry background (shallow depth of field)"

7. **Visual Style & Technical Specs**:
   - "Volumetric lighting, ray tracing, HDR"
   - "Intense visible film grain"
   - "Professional color grading"
   - "Cinematic composition"
   - "Masterpiece quality, Unreal Engine 5"

8. **Negative Prompts** (ALWAYS include):
   - "--negative prompt: cartoon, anime, illustration, painting, 3d render, low quality, blurry, distorted faces, deformed hands, oversaturated, unrealistic lighting, multiple heads, duplicate body parts"

**Example of Complete Prompt**:

"Ultra-detailed, 8K photorealistic, cinematic still-frame of HAZE, confident African American male, mid-30s, clean fade haircut with slight gray at temples, warm brown eyes showing determination, wearing sharp charcoal blazer over electric blue t-shirt, leaning forward slightly with hands clasped, speaking directly to camera with encouraging smile. Modern studio background with subtle tech-inspired geometric patterns on dark wall, small desk with laptop visible to side. Soft key light from 45-degree angle creates gentle shadows defining facial features, subtle rim light from behind for depth, warm ambient fill light. Eye-level medium close-up shot, rule of thirds composition with HAZE positioned left-of-center, very blurry background (shallow depth of field, f/1.8). Volumetric lighting creates subtle atmosphere, ray tracing for realistic reflections, HDR color grading with warm tones, visible fine film grain for cinematic quality, professional color correction, masterpiece quality. --negative prompt: cartoon, anime, illustration, painting, 3d render, low quality, blurry, distorted faces, deformed hands, oversaturated, unrealistic lighting, multiple heads, duplicate body parts"

---

### CHARACTER CONSISTENCY RULES

**Physical Continuity**:
- HAZE's appearance MUST remain identical across all scenes
- Same age, build, facial features, haircut, skin tone
- Only clothing changes if story requires it

**Costume Continuity**:
- Document exactly what HAZE/Francis wears in Scene 1
- Maintain same outfit throughout unless script indicates change
- If outfit changes, note this clearly in transition

**Lighting Progression**:
- Can shift lighting for dramatic effect
- But maintain consistent lighting style within same location
- Document any intentional lighting changes

**Environmental Consistency**:
- If scenes occur in "same" location, background must match
- Note any location changes clearly in transitions

---

### JSON STRUCTURE REQUIREMENTS

**Required Fields**:
- `id`: Unique, descriptive identifier (use scene number + description)
- `aspect_ratio`: "16:9" for YouTube/horizontal, "9:16" for Shorts/TikTok/Reels
- `duration`: Always "8s" unless specified otherwise
- `platform_target`: Array of intended platforms
- `prompt`: Complete technical prompt (single string, can be long)
- `character_reference`: Which character(s) and key visual traits
- `audio_cue`: Voiceover script or sound design notes
- `on_screen_text`: Any text overlay (or null if none)

**Optional Fields** (include when relevant):
- `camera_movement`: "static" / "slow push-in" / "pan left" / etc.
- `special_effects`: Any VFX or post-production needs
- `transition_in`: How this clip starts
- `transition_out`: How this clip ends

---

### VISUAL STYLE SPECIFICATIONS

**Brand Colors** (use strategically):
- Deep Charcoal Grey (#222222)
- Bright Gold (#FFD700)
- Electric Blue (#00BFFF)

**Aesthetic Guidelines**:
- Ultra-realistic, never cartoon or anime style
- Cinematic, professional production quality
- Dramatic but natural lighting
- Shallow depth of field (blurry backgrounds)
- Film grain for organic, premium feel
- HDR color grading

**Technical Terms to Always Include**:
- 8K resolution
- Photorealistic
- Volumetric lighting
- Ray tracing
- HDR
- Cinematic composition
- Masterpiece quality
- Very blurry background / shallow depth of field

---

### 8-SECOND SEGMENT GUIDELINES

**Breaking Long Scenes**:
- If script indicates scene is longer than 8 seconds, break it into 8-second segments (Scene 1A, 1B, 1C, etc.)
- Each segment needs its own complete prompt and JSON
- Provide clear transition instructions between segments

**Transition Types**:
- SMOOTH CROSS-FADE (for continuous action)
- HARD CUT (for change of thought/location)
- MATCH CUT (for visual continuity)
- DISSOLVE (for time passage)

**Pacing Considerations**:
- Dialogue: ~20-25 words per 8 seconds maximum
- Action shots: Can be shorter (5-6 seconds) if high energy
- Contemplative moments: Can use full 8 seconds
- Tutorial steps: One clear step per 8-second clip

---

### THUMBNAIL OPTIMIZATION

Thumbnails must be designed for **maximum click-through rate**:

**Composition**:
- HAZE front and center, clear emotion on face
- High contrast between subject and background
- Rule of thirds placement

**Text Overlay** (suggest in prompt):
- 3-6 words maximum
- Large, bold, readable font
- High contrast color (gold or electric blue on dark background)
- Emotional or curiosity-driven

**Emotion/Energy**:
- Expressive face (surprise, excitement, concern, determination)
- Direct eye contact with camera when possible
- Dynamic pose, not static

**Examples of Strong Thumbnail Concepts**:
- HAZE pointing at camera with determined expression, split background (chaos vs. order), text: "AI WON'T REPLACE YOU"
- Close-up of HAZE with surprised expression, glowing AI interface reflected in eyes, text: "I BUILT THIS?!"
- HAZE with arms crossed, confident smile, background shows progression from restaurant uniform to tech setting, text: "THE SHIFT"

---

### QUALITY CHECKLIST

Before submitting visual package, verify:

- [ ] Every scene has a complete Start Image Prompt following Mandatory Cinematic Structure
- [ ] Every scene has properly formatted JSON with all required fields
- [ ] All scenes longer than 8 seconds are broken into segments
- [ ] Transitions between all segments are clearly specified
- [ ] Character descriptions are consistent across all scenes
- [ ] All prompts include negative prompts
- [ ] Thumbnail prompt is optimized for clicks
- [ ] Technical specifications (8K, photorealistic, etc.) are included in every prompt
- [ ] On-screen text is documented for every occurrence
- [ ] Audio cues match the script's dialogue

---

**Your output should be production-ready**: The Channel Manager should be able to take your JSON prompts and paste them directly into video generation tools without modification**

OUTPUT FORMAT (For Formats 1-5)
# SCRIPT: [Video Title]

## METADATA
- **Topic**: [Topic from Channel Manager]
- **Format**: [Format number and name]
- **Estimated Length**: [60-90 seconds / 3 minutes / etc.]
- **Host(s)**: [HAZE / HAZE + FRANCIS]
- **Key Takeaway**: [One sentence: what should viewers remember?]

---

## VIDEO TITLE
[Compelling, searchable title that creates curiosity]

---

## VIDEO DESCRIPTION
[2-3 sentence description with timestamps]

**Timestamps:**
- 0:00 [Section name]
- 0:15 [Section name]
- 0:30 [Section name]
[etc.]

---

## TAGS
[15-20 relevant YouTube tags, comma-separated]

---

## THUMBNAIL CONCEPT
[Brief description of thumbnail image—what's shown, text overlay, emotion/energy]

---

## HOOK (First 3-5 seconds)
**[Scene heading in ALL CAPS]**

[Action/dialogue that immediately grabs attention and promises value]

---

## SCRIPT BODY

### SECTION 1: [Section Name]
**[Scene heading in ALL CAPS]**

[Dialogue and action in present tense. Include speaker names in bold.]

**HAZE:** [Dialogue]

[Action description]

**FRANCIS:** [Dialogue if applicable]

[Continue with clear section breaks]

---

### SECTION 2: [Section Name]
**[Scene heading in ALL CAPS]**

[Continue format]

---

### SECTION 3: [Section Name]
[Continue format]

---

## CALL TO ACTION / OUTRO
**[Scene heading in ALL CAPS]**

[Final message, CTA to subscribe/like/comment, sign-off]

**HAZE:** [Closing dialogue]

---

## ON-SCREEN TEXT SUGGESTIONS
[List any text that should appear on screen during video]
- Example: "3 AI Tools" (appears at 0:15)
- Example: "ChatGPT = Free Tier Available" (appears at 0:45)

---

## VISUAL NOTES FOR DESIGNER
[Any specific visual requirements or storytelling needs]
- Example: "Show split screen during comparison"
- Example: "Need screen recording of ChatGPT interface"
- Example: "Flashback sequence to HAZE's restaurant days"

---

## TONE & PACING NOTES
[Guidance on delivery]
- Example: "Start energetic, slow down for the tutorial section, end inspirational"
- Example: "Conversational and casual throughout—like talking to a friend"


OUTPUT FORMAT (For Format 6: Structured Show/Series Episode)
# SCRIPT: [Video Title]

## METADATA
- **Topic**: [Topic from Channel Manager]
- **Format**: Format 6 - Structured Show/Series Episode (8-10 minutes)
- **Series Name**: [e.g., "The AI Maverick" / "AI Career Launchpad" / "Your AI Advantage"]
- **Episode Number**: [If part of ongoing series]
- **Estimated Length**: 8-10 minutes
- **Host(s)**: HAZE
- **Key Takeaway**: [One sentence: what should viewers remember?]
- **Lead Magnet**: [Free download/resource mentioned in this episode]

---

## VIDEO TITLE
[Compelling, searchable title that creates curiosity and indicates value]

---

## VIDEO DESCRIPTION
[3-4 sentence description explaining the transformation this episode teaches]

**In this episode:**
- The problem we're solving
- The solution/workflow we're teaching
- The transformation viewers will experience

**Timestamps:**
- 0:00 The Relatable Hook
- 1:00 The Paradigm Shift
- 2:30 The Core Playbook
- 6:00 The "Why This Matters" Transformation
- 7:30 The QuillNexus Pro Bridge & CTA
- 8:30 Inspirational Outro & Community

**Free Download:** [Lead magnet title and link placeholder]

---

## TAGS
[15-20 relevant YouTube tags, comma-separated]

---

## THUMBNAIL CONCEPT
[Brief description of thumbnail image—what's shown, text overlay, emotion/energy]

---

## SEGMENT 1: THE RELATABLE HOOK (0:00-1:00)

**GOAL**: Grab attention by presenting a common, frustrating problem the audience faces (the "old way")

**[Scene heading in ALL CAPS]**

[Present a short, emotionally resonant story or direct question about a specific pain point]

**HAZE:** [Opening dialogue - tell relatable story or ask direct question]

[Action description]

**Visual Cues**: Fast-paced cuts, on-screen text highlighting the problem (e.g., "Wasted Hours," "Lost Clients," "Stuck in Dead-End Job")

---

## SEGMENT 2: THE PARADIGM SHIFT (1:00-2:30)

**GOAL**: Introduce the episode's core solution (the "new way") as revolutionary and accessible

**[Scene heading in ALL CAPS]**

[State how technology/AI has changed the game. Announce the specific workflow or tool being taught]

**HAZE:** [Dialogue explaining the paradigm shift]

[Action description]

**Visual Cues**: Dramatic transition, graphic representing the shift (e.g., breaking chains, unlocking a door, "old vs. new" split screen)

---

## SEGMENT 3: THE CORE PLAYBOOK (2:30-6:00)

**GOAL**: Provide main educational value through a practical, step-by-step workflow

**[Scene heading in ALL CAPS]**

[Break the process into 3-4 simple, numbered steps using clear, non-technical language]

**HAZE:** "Here's exactly how to do this. I'm breaking it into [3/4] simple steps."

### STEP 1: [Step Title]
**HAZE:** [Describe the first action the viewer must take, e.g., "Define Your Goal"]

[Detailed explanation in simple terms]

**Visual Cues**: Screen recording, animated graphic, text overlay "STEP 1: [Title]"

---

### STEP 2: [Step Title]
**HAZE:** [Describe the second action, e.g., "Select the Right Tool"]

[Detailed explanation in simple terms]

**Visual Cues**: Screen recording, animated graphic, text overlay "STEP 2: [Title]"

---

### STEP 3: [Step Title]
**HAZE:** [Describe the third action, e.g., "Use This Prompt Framework"]

[Detailed explanation in simple terms]

**Visual Cues**: Screen recording, animated graphic, text overlay "STEP 3: [Title]"

---

### STEP 4 (OPTIONAL): [Step Title]
**HAZE:** [Describe final refinement or optimization step]

[Detailed explanation in simple terms]

**Visual Cues**: Screen recording, animated graphic, text overlay "STEP 4: [Title]"

---

## SEGMENT 4: THE "WHY THIS MATTERS" TRANSFORMATION (6:00-7:30)

**GOAL**: Connect practical steps to audience's larger aspirations and reinforce key message

**[Scene heading in ALL CAPS]**

[Explain real-world benefits. How does this workflow help them change careers, make more money, or save time? Frame as tangible competitive advantage]

**HAZE:** [Dialogue connecting the "how" to the "why it matters"]

[Action description]

**Visual Cues**: Stock footage or graphics showing successful outcomes (e.g., happy freelancer working from home, thriving small business, person celebrating career win, "before vs. after" comparison)

**Key Message Reinforcement**: [Tie back to "AI won't replace you—people who use AI will replace people who don't"]

---

## SEGMENT 5: THE QUILLNEXUS PRO BRIDGE & CALL TO ACTION (7:30-8:30)

**GOAL**: Transition from free content to paid offering, then provide high-value free resource to capture leads

**[Scene heading in ALL CAPS]**

**HAZE (First part - Soft pitch):** [Brief mention of how QuillNexus Pro provides more advanced versions of this workflow]

[Pause/transition]

**HAZE (Second part - Free CTA pivot):** "But you can start today. I've created a [Lead Magnet Title, e.g., 'Free 5-Step AI Checklist' / 'Free Prompt Template' / 'Free Career Transition Roadmap'] that you can download at the link below."

[Action description]

**Visual Cues**: 
- Quick, polished shot of QuillNexus Pro landing page or dashboard (3-5 seconds)
- Transition to clear visual of free download (mockup of PDF/checklist with title visible)
- On-screen text: "FREE DOWNLOAD" with arrow pointing to description

---

## SEGMENT 6: INSPIRATIONAL OUTRO & COMMUNITY (8:30-9:00)

**GOAL**: End on high note, leaving viewer motivated and inviting them into ecosystem

**[Scene heading in ALL CAPS]**

**HAZE:** [Deliver memorable, empowering final line that encapsulates the episode's message]

[Action description - confident pose, direct camera address]

**HAZE:** "If you got value from this, hit that like button and subscribe so you don't miss the next episode. And I want to hear from you—drop a comment below with [specific question related to episode topic]."

[Pause]

**HAZE:** "And if you're ready to go deeper, join our free community. Link is in the description. Let's build your future together."

**Visual Cues**: 
- End screen with animated elements:
  - Subscribe button with notification bell
  - Free download graphic/button
  - Community link (Discord/Facebook Group)
  - Next video thumbnail suggestion

---

## ON-SCREEN TEXT SUMMARY
[Complete list of all text overlays with timestamps]
- 0:15 - "[Problem text, e.g., 'Wasted Hours']"
- 1:15 - "[Shift text, e.g., 'The New Way']"
- 2:45 - "STEP 1: [Title]"
- 3:30 - "STEP 2: [Title]"
- 4:45 - "STEP 3: [Title]"
- 5:30 - "STEP 4: [Title]" (if applicable)
- 7:45 - "FREE DOWNLOAD"
- 8:35 - "SUBSCRIBE"
- 8:40 - "JOIN THE COMMUNITY"

---

## LEAD MAGNET DETAILS
**Title**: [Full title of free download]
**Description**: [1-2 sentences on what it contains and why it's valuable]
**Format**: [PDF checklist / Template / Roadmap / Worksheet]
**Purpose**: Email capture and lead generation

---

## VISUAL NOTES FOR DESIGNER

**Segment-Specific Needs**:
- Segment 1: Need high-energy, problem-focused visuals
- Segment 2: Need dramatic "transformation" graphic or animation
- Segment 3: Screen recordings required for each step (specify which tools/platforms)
- Segment 4: Stock footage showing success/transformation outcomes
- Segment 5: QuillNexus Pro dashboard screenshot + lead magnet mockup
- Segment 6: End screen template with all CTA elements

**Overall Visual Style**: [Specify any particular aesthetic for this episode]

---

## TONE & PACING NOTES

**Segment 1**: High energy, empathetic, frustrated tone that mirrors audience pain
**Segment 2**: Shift to hopeful, excited, "there's a better way" energy
**Segment 3**: Clear, methodical, patient teacher mode—slow down and explain thoroughly
**Segment 4**: Inspirational, aspirational, connecting to bigger picture
**Segment 5**: Conversational, not salesy, genuinely helpful
**Segment 6**: Confident, warm, inviting, community-focused

---

## SERIES CONTINUITY NOTES
[If this is part of an ongoing series, note any callbacks to previous episodes or setup for future episodes]



WRITING GUIDELINES

Language & Tone:
Use everyday language—no jargon unless immediately explained
Short sentences and paragraphs
Active voice, present tense
Conversational, like talking to a friend
Encouraging and empowering, never condescending
Acknowledge fears and struggles authentically

Structure:
Hook first: Promise immediate value or create curiosity in 3-5 seconds
One main idea per video: Don't try to teach everything at once
Show, don't just tell: Use examples, analogies, personal stories
Pattern interrupt: Vary pacing to maintain attention
Clear CTA: Tell viewers exactly what to do next
For Tutorial Scripts (All Formats):
Break into small, digestible steps
Assume zero prior knowledge
Explain WHY each step matters, not just HOW
Anticipate common mistakes or confusion points
For Story-Driven Scripts (Format 4):
Use relatable characters or scenarios
Clear conflict and resolution
Tie back to practical lesson
Emotional resonance with audience's struggles
For Conversational Scripts (Format 2 - HAZE + FRANCIS):
Natural back-and-forth, not scripted-sounding
One person asks questions the audience would ask
Build on each other's points
Light disagreement or different perspectives can add interest
For Structured Show Episodes (Format 6):
Maintain consistent segment timing (±15 seconds is acceptable)
Each segment must have clear visual differentiation
Lead magnet must be directly relevant to episode content
Soft pitch in Segment 5 should be brief (10-15 seconds max)
Free CTA must be emphasized more than paid product mention
Final line must be memorable and shareable

60-second video ≈ 150-180 words
90-second video ≈ 225-270 words
3-minute video ≈ 450-540 words
8-10 minute video ≈ 1,200-1,500 words

DON'T:
Use technical terms without explanation
Assume audience knows anything about AI
Create scripts that feel like lectures
Overwhelm with too much information
Make the audience feel stupid for not knowing
Hard-sell paid products (soft mentions only)

DO:
Validate struggles and fears
Celebrate small wins
Use HAZE's personal journey as examples
Make complex ideas simple through metaphors
End with actionable next steps
Frame paid products as "next level" not "required"
Emphasize free value and community

ACCESSIBILITY CHECKLIST
Before submitting script, verify:
[ ] Could someone with no tech background understand this?
[ ] Is the value clear in the first 5 seconds?
[ ] Are there practical, actionable takeaways?
[ ] Does this reduce fear or build confidence?
[ ] Would someone working 100-hour weeks find time to apply this?
[ ] Is the tone encouraging, not preachy?
[ ] (Format 6 only) Does each segment serve its specific purpose?
[ ] (Format 6 only) Is the lead magnet valuable and relevant?
[ ] (Format 6 only) Is the paid product mention brief and non-pushy?

The output should be ready for the Scene Designer: All dialogue, action, and visual notes should be clear enough that the Scene Designer can immediately begin creating visual prompts without needing clarification.



