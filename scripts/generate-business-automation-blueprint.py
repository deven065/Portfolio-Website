from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
OUT_DIR = PUBLIC / "resources"
OUT_FILE = OUT_DIR / "2026-business-automation-blueprint.pdf"

W, H = 1240, 1754
M = 96

NAVY = (5, 10, 28)
NAVY_2 = (15, 23, 42)
PANEL = (18, 29, 52)
PANEL_2 = (26, 41, 73)
BLUE = (37, 99, 235)
CYAN = (34, 211, 238)
WHITE = (248, 250, 252)
MUTED = (148, 163, 184)
SOFT = (203, 213, 225)
LINE = (51, 65, 85)
GREEN = (34, 197, 94)
AMBER = (245, 158, 11)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    candidates = {
        "regular": [
            "/usr/share/fonts/abattis-cantarell-fonts/Cantarell-Regular.otf",
            "/usr/share/fonts/adwaita-sans-fonts/AdwaitaSans-Regular.ttf",
            "/usr/share/fonts/google-carlito-fonts/Carlito-Regular.ttf",
        ],
        "bold": [
            "/usr/share/fonts/abattis-cantarell-fonts/Cantarell-Bold.otf",
            "/usr/share/fonts/google-carlito-fonts/Carlito-Bold.ttf",
            "/usr/share/fonts/adwaita-sans-fonts/AdwaitaSans-Regular.ttf",
        ],
    }
    for path in candidates[name]:
        if Path(path).exists():
            return ImageFont.truetype(path, size=size)
    return ImageFont.load_default()


F = {
    "xs": font("regular", 22),
    "sm": font("regular", 28),
    "body": font("regular", 34),
    "body_b": font("bold", 34),
    "h3": font("bold", 42),
    "h2": font("bold", 58),
    "h1": font("bold", 86),
    "hero": font("bold", 100),
}


def text_size(draw, text, fnt):
    box = draw.textbbox((0, 0), text, font=fnt)
    return box[2] - box[0], box[3] - box[1]


def draw_wrapped(draw, text, xy, width, fnt, fill=SOFT, line_gap=12):
    x, y = xy
    words = text.split()
    lines = []
    current = ""
    for word in words:
        test = f"{current} {word}".strip()
        if text_size(draw, test, fnt)[0] <= width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    for line in lines:
        draw.text((x, y), line, font=fnt, fill=fill)
        y += text_size(draw, line, fnt)[1] + line_gap
    return y


def gradient_bg():
    img = Image.new("RGB", (W, H), NAVY)
    px = img.load()
    for y in range(H):
        for x in range(W):
            top = 1 - y / H
            left = 1 - x / W
            b = int(28 + 28 * top + 18 * left)
            g = int(10 + 22 * top)
            r = int(5 + 16 * top)
            px[x, y] = (r, g, b)
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((-220, 120, 520, 860), fill=(37, 99, 235, 48))
    gd.ellipse((760, -220, 1500, 520), fill=(34, 211, 238, 34))
    glow = glow.filter(ImageFilter.GaussianBlur(90))
    return Image.alpha_composite(img.convert("RGBA"), glow)


def header(draw, page, title):
    logo_path = PUBLIC / "logo-white.png"
    if logo_path.exists():
        logo = Image.open(logo_path).convert("RGBA").resize((48, 48))
        draw._image.paste(logo, (M, 54), logo)
    draw.text((M + 64, 61), "Deven Digital Labs", font=F["body_b"], fill=WHITE)
    draw.text((W - M - 170, 66), f"Page {page}/12", font=F["xs"], fill=MUTED)
    draw.line((M, 130, W - M, 130), fill=(37, 99, 235, 90), width=2)
    if title:
        draw.text((M, 162), title, font=F["h2"], fill=WHITE)


def footer(draw, page):
    draw.line((M, H - 112, W - M, H - 112), fill=(51, 65, 85, 120), width=2)
    draw.text((M, H - 76), "2026 Business Automation Blueprint", font=F["xs"], fill=MUTED)
    draw.text((W - M - 295, H - 76), "devendigitallabs.com", font=F["xs"], fill=MUTED)


def pill(draw, xy, text, fill=BLUE, outline=(96, 165, 250)):
    x, y = xy
    tw, th = text_size(draw, text, F["xs"])
    draw.rounded_rectangle((x, y, x + tw + 34, y + th + 18), radius=22, fill=(*fill, 60), outline=outline, width=2)
    draw.text((x + 17, y + 9), text, font=F["xs"], fill=(147, 197, 253))


def card(draw, xywh, title, body=None, accent=BLUE):
    x, y, w, h = xywh
    draw.rounded_rectangle((x, y, x + w, y + h), radius=26, fill=PANEL, outline=(59, 130, 246, 110), width=2)
    draw.rectangle((x, y, x + 10, y + h), fill=accent)
    draw.text((x + 36, y + 30), title, font=F["h3"], fill=WHITE)
    if body:
        draw_wrapped(draw, body, (x + 36, y + 92), w - 72, F["sm"], fill=SOFT, line_gap=10)


def bullets(draw, items, x, y, width, color=SOFT, gap=26):
    for item in items:
        draw.ellipse((x, y + 12, x + 16, y + 28), fill=CYAN)
        y = draw_wrapped(draw, item, (x + 34, y), width - 34, F["body"], fill=color, line_gap=10) + gap
    return y


def section_page(page_no, title, intro, items, side_title=None, side_items=None):
    img = gradient_bg()
    draw = ImageDraw.Draw(img)
    draw._image = img
    header(draw, page_no, title)
    y = draw_wrapped(draw, intro, (M, 260), W - 2 * M, F["body"], fill=SOFT, line_gap=12)
    y += 48
    left_w = 650 if side_items else W - 2 * M
    bullets(draw, items, M, y, left_w)
    if side_items:
        card(draw, (M + 710, y - 26, 340, 560), side_title, None, accent=CYAN)
        sy = y + 86
        for label, value in side_items:
            draw.text((M + 746, sy), label, font=F["xs"], fill=MUTED)
            draw.text((M + 746, sy + 35), value, font=F["h3"], fill=WHITE)
            sy += 126
    footer(draw, page_no)
    return img.convert("RGB")


def cover():
    img = gradient_bg()
    draw = ImageDraw.Draw(img)
    draw._image = img
    logo_path = PUBLIC / "logo-white.png"
    if logo_path.exists():
        logo = Image.open(logo_path).convert("RGBA").resize((82, 82))
        img.paste(logo, (M, 86), logo)
    draw.text((M + 104, 105), "Deven Digital Labs", font=F["h3"], fill=WHITE)
    pill(draw, (M, 280), "FREE RESOURCE")
    draw_wrapped(draw, "The 2026 Business Automation Blueprint", (M, 352), W - 2 * M, F["hero"], fill=WHITE, line_gap=20)
    draw_wrapped(
        draw,
        "A practical 12-page guide to replacing repetitive admin work with n8n, AI assistants, clean data flows, and client-ready operating systems.",
        (M, 650),
        820,
        F["body"],
        fill=SOFT,
        line_gap=14,
    )
    card(draw, (M, 890, 510, 320), "Save 20+ hours/week", "Use the workflow map, rollout plan, and ROI worksheet to identify the highest-leverage automations before building anything.", BLUE)
    card(draw, (M + 560, 890, 500, 320), "Built for service businesses", "Ideal for agencies, real estate teams, clinics, interior design studios, consultants, and local operators.", CYAN)
    draw.rounded_rectangle((M, 1285, W - M, 1590), radius=28, fill=(15, 23, 42), outline=(96, 165, 250, 110), width=2)
    draw.text((M + 42, 1328), "What you will get", font=F["h3"], fill=WHITE)
    bullets(draw, ["A workflow audit checklist.", "Five automation recipes you can adapt.", "A 30-day implementation plan.", "A simple ROI calculator framework."], M + 42, 1404, 940, gap=8)
    footer(draw, 1)
    return img.convert("RGB")


def process_map():
    img = gradient_bg()
    draw = ImageDraw.Draw(img)
    draw._image = img
    header(draw, 3, "The Automation Map")
    draw_wrapped(draw, "Every reliable automation starts with a clear route from trigger to decision to action. Map the work before choosing tools.", (M, 250), W - 2 * M, F["body"], fill=SOFT)
    steps = [
        ("1", "Trigger", "A form, email, WhatsApp message, payment, CRM update, or scheduled job starts the flow."),
        ("2", "Clean Data", "Normalize names, emails, phone numbers, files, dates, and source fields."),
        ("3", "Decide", "Use rules or AI to qualify, categorize, score, draft, route, or flag exceptions."),
        ("4", "Act", "Create records, send messages, assign tasks, generate documents, or update dashboards."),
        ("5", "Observe", "Log every run, capture errors, and track time saved so the system keeps improving."),
    ]
    y = 420
    for num, title, body in steps:
        draw.rounded_rectangle((M, y, W - M, y + 170), radius=24, fill=PANEL, outline=(51, 65, 85), width=2)
        draw.ellipse((M + 34, y + 44, M + 112, y + 122), fill=BLUE)
        draw.text((M + 61, y + 61), num, font=F["body_b"], fill=WHITE)
        draw.text((M + 145, y + 35), title, font=F["h3"], fill=WHITE)
        draw_wrapped(draw, body, (M + 145, y + 96), 820, F["sm"], fill=SOFT, line_gap=8)
        if y < 1080:
            draw.line((W // 2, y + 170, W // 2, y + 208), fill=CYAN, width=4)
        y += 208
    footer(draw, 3)
    return img.convert("RGB")


def roi_page():
    img = gradient_bg()
    draw = ImageDraw.Draw(img)
    draw._image = img
    header(draw, 11, "ROI Worksheet")
    draw_wrapped(draw, "Use this simple model before building. It keeps automation decisions tied to time, money, risk, and customer experience.", (M, 250), W - 2 * M, F["body"], fill=SOFT)
    rows = [
        ("Task name", "Example: lead follow-up, invoice chasing, weekly reporting"),
        ("Volume", "How many times does this happen per week?"),
        ("Minutes each", "Average manual effort per occurrence."),
        ("Hourly cost", "Loaded internal cost or value of founder time."),
        ("Error cost", "Missed revenue, rework, delays, or customer friction."),
        ("Build effort", "One-time setup plus testing and documentation."),
    ]
    y = 430
    for i, (label, hint) in enumerate(rows):
        fill = PANEL if i % 2 == 0 else PANEL_2
        draw.rounded_rectangle((M, y, W - M, y + 112), radius=18, fill=fill, outline=(51, 65, 85), width=1)
        draw.text((M + 34, y + 28), label, font=F["body_b"], fill=WHITE)
        draw.text((M + 360, y + 32), hint, font=F["sm"], fill=SOFT)
        y += 128
    card(draw, (M, 1265, W - 2 * M, 250), "Prioritize the highest payback", "Automate tasks with high frequency, clear rules, measurable delays, or expensive errors first. Avoid automating a broken process until the process itself is simplified.", GREEN)
    footer(draw, 11)
    return img.convert("RGB")


def checklist_page():
    img = gradient_bg()
    draw = ImageDraw.Draw(img)
    draw._image = img
    header(draw, 12, "Launch Checklist")
    checklist = [
        "Document the current manual process with screenshots and example inputs.",
        "Define the success metric: time saved, faster response, fewer errors, or more revenue.",
        "Start with one workflow owner and one source of truth for data.",
        "Add error alerts, run logs, and a manual override path.",
        "Test with real edge cases before turning the automation on.",
        "Review results weekly for the first month and improve the prompts/rules.",
    ]
    y = 275
    for item in checklist:
        draw.rounded_rectangle((M, y, W - M, y + 120), radius=18, fill=PANEL, outline=(51, 65, 85), width=1)
        draw.rectangle((M + 34, y + 38, M + 78, y + 82), outline=CYAN, width=4)
        draw.line((M + 43, y + 61, M + 55, y + 74), fill=GREEN, width=5)
        draw.line((M + 55, y + 74, M + 73, y + 45), fill=GREEN, width=5)
        draw_wrapped(draw, item, (M + 108, y + 31), 880, F["body"], fill=WHITE, line_gap=8)
        y += 142
    draw.rounded_rectangle((M, 1230, W - M, 1545), radius=30, fill=(37, 99, 235), outline=(96, 165, 250), width=2)
    draw.text((M + 42, 1276), "Want this implemented for your business?", font=F["h3"], fill=WHITE)
    draw_wrapped(draw, "Book a free strategy call. We will identify your fastest automation opportunities and map the cleanest path from manual work to measurable savings.", (M + 42, 1350), 880, F["body"], fill=(239, 246, 255), line_gap=12)
    draw.text((M + 42, 1490), "hello@devendigitallabs.com  |  devendigitallabs.com/contact", font=F["sm"], fill=WHITE)
    footer(draw, 12)
    return img.convert("RGB")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    pages = [
        cover(),
        section_page(
            2,
            "The Manual Work Tax",
            "Manual admin looks harmless because each task feels small. The cost appears when hundreds of tiny actions steal focus from sales, delivery, and client relationships.",
            [
                "Repetitive copy-paste work increases delays and creates inconsistent data.",
                "Late follow-ups reduce conversion, especially when leads arrive outside office hours.",
                "Disconnected tools force teams to reconcile the same information in multiple places.",
                "Reporting becomes backward-looking because the source data is never clean enough.",
            ],
            "Common leaks",
            [("Lead response", "5-30 min"), ("Weekly reports", "2-6 hrs"), ("Invoice chasing", "1-4 hrs"), ("Data cleanup", "3-8 hrs")],
        ),
        process_map(),
        section_page(
            4,
            "Workflow 1: Lead Intake",
            "Use automation to capture every enquiry, standardize it, qualify it, and route it before the team starts manual follow-up.",
            [
                "Connect website forms, WhatsApp, email, Facebook lead ads, Google Sheets, and CRM intake into one workflow.",
                "Validate email and phone fields, tag the source, and create a single lead record.",
                "Score leads using service type, budget, timeline, location, and urgency.",
                "Send a fast, personalized response with a booking link and next step.",
            ],
            "Best tools",
            [("Orchestration", "n8n"), ("CRM", "HubSpot"), ("Scheduling", "Cal.com"), ("Alerts", "Slack/Email")],
        ),
        section_page(
            5,
            "Workflow 2: Follow-Up Engine",
            "Most businesses lose revenue after the first reply. A follow-up engine keeps conversations moving without sounding robotic.",
            [
                "Create a 5-touch sequence across email, WhatsApp, and task reminders.",
                "Pause the sequence automatically when a prospect replies or books a call.",
                "Use AI to draft context-aware replies while keeping final approval with the team.",
                "Track stage changes so sales reports reflect reality without manual updates.",
            ],
            "Rule of thumb",
            [("Speed", "< 5 min"), ("Touches", "5"), ("Window", "14 days"), ("Owner", "1 person")],
        ),
        section_page(
            6,
            "Workflow 3: Proposals and Invoices",
            "Document workflows save time and reduce mistakes when pricing, scope, client details, and payment links are reused across jobs.",
            [
                "Generate proposals from approved templates using CRM fields and selected services.",
                "Create invoices or payment requests after proposal acceptance.",
                "Notify the owner when a document is viewed, signed, paid, or overdue.",
                "Store signed PDFs and payment status against the client record.",
            ],
            "Outputs",
            [("Proposal", "PDF"), ("Invoice", "Link"), ("Reminder", "Auto"), ("Archive", "Drive")],
        ),
        section_page(
            7,
            "Workflow 4: Client Delivery Ops",
            "Automation should make delivery calmer. Use it to create projects, assign tasks, collect assets, and keep clients informed.",
            [
                "Turn a won deal into a project board with task templates and due dates.",
                "Request missing client assets with automatic reminders.",
                "Send weekly status updates from project data instead of rewriting the same email.",
                "Escalate blockers when tasks are overdue or dependencies are missing.",
            ],
            "Delivery stack",
            [("Tasks", "ClickUp"), ("Files", "Drive"), ("Updates", "Email"), ("Blocks", "Slack")],
        ),
        section_page(
            8,
            "Workflow 5: Data Sync and Reporting",
            "Dashboards fail when the inputs are inconsistent. Sync the systems first, then report from a trusted layer.",
            [
                "Choose one source of truth for contacts, deals, projects, and invoices.",
                "Sync records on schedule or event triggers, not by manual exports.",
                "Create exception reports for missing values, duplicates, and stale records.",
                "Publish weekly leadership snapshots with revenue, pipeline, delivery, and support metrics.",
            ],
            "Metrics",
            [("Pipeline", "Value"), ("Response", "Speed"), ("Delivery", "Status"), ("Cash", "A/R")],
        ),
        section_page(
            9,
            "AI That Actually Helps",
            "AI is most useful when it is bounded by your data, your templates, and your approval rules. Treat it as a drafting and classification layer, not a black box.",
            [
                "Use AI to summarize calls, extract requirements, categorize leads, and draft follow-ups.",
                "Ground AI outputs in approved service descriptions, pricing logic, and FAQs.",
                "Keep humans in the loop for legal, pricing, medical, financial, and high-value client decisions.",
                "Log prompts and outputs so quality can be reviewed and improved.",
            ],
            "Safe uses",
            [("Summaries", "Good"), ("Drafts", "Good"), ("Routing", "Good"), ("Final calls", "Human")],
        ),
        section_page(
            10,
            "30-Day Rollout Plan",
            "Do not automate everything at once. Ship one valuable workflow, prove it, then build the next layer.",
            [
                "Days 1-3: audit repetitive work, collect examples, and pick one high-frequency process.",
                "Days 4-7: map triggers, data fields, tools, owners, failure cases, and success metrics.",
                "Days 8-14: build the first version with logging, alerts, and a manual fallback.",
                "Days 15-21: test with real records, fix edge cases, and document the workflow.",
                "Days 22-30: launch, measure, review weekly, and choose the next automation.",
            ],
            "Target",
            [("One workflow", "Live"), ("Time saved", "Measured"), ("Owner", "Trained"), ("Next build", "Chosen")],
        ),
        roi_page(),
        checklist_page(),
    ]
    pages[0].save(OUT_FILE, "PDF", resolution=144.0, save_all=True, append_images=pages[1:], quality=88)
    print(OUT_FILE)


if __name__ == "__main__":
    main()
