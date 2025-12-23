# Image AI Detection

**Version: 1.0**  
**Release Date: January 01, 2026**  
**Applicable to: Alert Recipients, Action Item Responsible Persons, Regional Quality/EHS Representatives, Compliance Committee Members**

## 1. Role Description

| Role | Permission Scope | Entry Point |
|------|----------|--------------|
| **Alert/Action Item Recipient** | Only handle tasks assigned to themselves<br>• No access to 【Application Center】 | Home → 【Pending Confirmation Alerts】<br>Home → 【Pending Action Items】 |
| **Application Owner**<br>(Regional Quality/EHS Representative, Compliance Committee Member) | Can retrieve all alerts in their region<br>• Can export and analyze data | 【AI Alerting Application Center】→ Sub-applications |

## 2. Operation Guide

### 2.1 Function Overview
The system automatically retrieves image samples from business systems, and AI models will identify the following risks:
- Image upload timeout (such as >72 hours)
- Abnormal execution of critical steps (such as temperature stickers turning red, silicone gel application having breakpoints, etc.)
- Poor image quality or unrecognizable images

### 2.2 Applicable Business
| Business Domain | Application Name |
|--------|----------|
| **On-site Quality** | Image AI-CTQ Detection |
| **On-site EHS** | Image AI-CTS Detection |
| **Manufacturing Department** | Manufacturing Image AI-CTQ Detection |

### 2.3 Main Interface
Access path: 【Alert Application Center】 → 【Image AI Detection Application】

![Image List Page](/public/app-centre-pic-en.png)

### 2.4 Filtering and Querying
Supports filtering by the following conditions:
- Alert item number, time, status
- Step upload time, belonging region, work order number, step description, project code
- AI monitoring model (such as "temperature sticker") etc.

![Image Class Filter Area](/public/image-filter-en.png)

### 2.5 Alert Details and Review
- Click the 【View】 button on the right to enter the detail page:<br>

![View Details Page](/public/pic-detail-en.png)

- In the detail page, view AI alert results, work order information; click the 【View】 button to preview the corresponding image:<br>

![View Details Page](/public/pic-info-en.png)

- In the 【Confirmation Information】 area:
   - Select **Whether Problem** (Yes / No)
   - Fill in **Confirmation Description** (required)

![Wait for Confirm](/public/pic-confirm-en.png)

> ✅ When selecting "Yes", click the **【Process】** button, the system will pop up the 【Alert Processing】 dialog box, providing the following three processing methods:

#### Processing Method 1: Pending subsequent processing
- **Applicable Scenario**: Problem has been identified, but immediate rectification is not required (such as production scheduling, waiting for spare parts, planned maintenance, etc.)
- **Operation Steps**:
  - Select **"Yes"** in the dialog box
  - Select **"Wait for Processing"** from the dropdown menu
  - Fill in supplementary notes (such as "Wait until next week to sign uniformly")

![Wait for Processing](/public/pic-tbd-en.png)

- **System Behavior**:
  - Alert status updates to **"Closed"**
  - Does not generate action items
  - Remains in alert records for subsequent tracking

#### Processing Method 2: Close with remark
- **Applicable Scenario**: Problem has been resolved, no further action required, or acceptable deviation
- **Operation Steps**:
  - Select **"Yes"**
  - Select **"Close with Additional Information"** from the dropdown menu
  - Fill in supplementary notes
  - Can upload attachments as evidence
- **System Behavior**:
  - Alert status changes to **"Closed"**
  - Does not create action items
  - Counted in "Valid Alerts - Closed Loop" statistics, used for quality analysis

![Close with Additional Information](/public/pic-add-en.png)

#### Processing Method 3: Add actions
- **Applicable Scenario**: Need to specify responsible person, corrective measures and completion deadline (such as rework, repair, process optimization, etc.)
- **Operation Steps**:
  - Select **"Yes"**
  - Select **"Add Action Item"** from the dropdown menu
  - Fill in measures, responsible person, expected completion time
  - Can upload attachments (such as communication records, standard templates)
- **System Behavior**:
  - Automatically generates a **【Pending Closed Loop Action Item】**
  - Automatically assigns to current user (or can specify other responsible persons)
  - Pushes notification to responsible person's homepage
  - Action item status tracked independently, supports uploading rectification evidence and audit closure

![Add Action Item](/public/pic-action-en.png)

> 🔍 **Notes**:
> - "Attachments" support multiple file uploads (JPG, PNG, PDF, DOCX, etc.), single file ≤20MB
> - All submitted content (including processing method, description, attachments) are permanently recorded, supporting audit tracing
> - Once submitted, processing method cannot be changed; if adjustment needed, please contact application owner to initiate modification process

---

### Example Scenarios

| Actual Scenario | Recommended Processing Method | Description |
|----------|----------------|------|
| Blurry image but operation normal, re-uploaded | Close with Additional Information | Quick closure |
| Found silicone gel application breakpoint, requires rework | Add Action Item | Create task, assign engineer |
| Temperature sticker turned red, but equipment under planned maintenance | Wait for Processing | Explain maintenance situation |

> 🔍 **Notes**:  
> The above three processing methods apply to **Image, Document, APQP** all alert types, ensuring flexible, compliant, and traceable problem response paths.

## 3. Operation Path Reference

| Operation | Alert/Action Item Recipient | Application Owner |
|------|------------------|------------|
| Review Alert | Home →【Pending Confirmation Alerts】 | Application Center → Sub-application → View Alert Items|
| Close Action Item | Home →【Pending Closed Loop Action Items】 | Application Center → Sub-application → View Action Items|
| Export Data | ❌ Not Supported | ✅ Supported (Excel, CSV) |
| Global Search | ❌ Not Supported | ✅ Filter by region/project, etc. |

## 4. Frequently Asked Questions (FAQ)

**Q: Why can't I see a certain alert on my homepage?**  
A: The alert is not assigned to you. Please confirm whether the belonging work order/project is within your responsibility scope.

**Q: Can application owner review on behalf of recipient?**  
A: Not recommended. The system follows the principle of "who receives, who reviews" to ensure accountability.

**Q: What is the difference between "AI-CTS" and "AI-CTQ" in image category?**  
A:  
- **CTQ** (Critical to Quality): Focuses on product quality critical points  
- **CTS** (Critical to Safety): Focuses on personnel/environment safety critical points  

**Q: How to request application center permissions?**  
A: Contact system administrator, provide role proof.
> 🔍 **More Questions**: See the [FAQ document](/en/faq.md)




