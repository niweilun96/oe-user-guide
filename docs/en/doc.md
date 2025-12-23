# Document AI Detection

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
The system automatically retrieves document samples from business systems (such as inspection forms, major components, torque reports, etc.), and AI models will identify the following risks:
- Missing critical information (such as signatures, seals, missing dates, etc.)
- Failed inspection conclusions

### 2.2 Applicable Business
| Business Domain | Application Name |
|--------|----------|
| **On-site Quality** | Document AI Detection |
| **On-site EHS** | EHS Risk AI Detection |

### 2.3 Main Interface
Access path: 【Alert Application Center】 → 【Document AI Detection Application】

![Document Class Main List Page](/public/app-centre-doc-en.png)

### 2.4 Filtering and Querying
Supports filtering by the following conditions:
- Alert item number, time, status
- AI monitoring model (such as torque report, fire protection/inspection)
- Belonging region, work order number, project code, etc.

![Document Class Filter Area](/public/doc-filter-en.png)

### 2.5 Alert Details and Review
- Click the 【View】 button on the right to enter the detail page:

![Document Detail Page - Panoramic View](/public/doc-detail-en.png)

- In the detail page:
  - Display **Document PDF** centered, AI automatically highlights abnormal areas (such as red boxes marking "No Signature")
  - Left side shows **Alert List**, listing specific problem points (such as "No 1: Information Missing")
  - Right side displays **Alert Information** and **Document Basic Data** (file name, uploader, work order number, etc.)

![Alert Details](/public/doc-info-en.png)

- In the 【Confirmation Information】 area:
   - Select **Whether Problem** (Yes / No)
   - Fill in **Confirmation Description** (required)

![Wait for Confirm](/public/doc-confirm-en.png)

> ✅ When selecting "Yes", click the **【Process】** button, the system will pop up the 【Alert Processing】 dialog box, providing the following three processing methods:

#### Processing Method 1: Pending subsequent processing
- **Applicable Scenario**: Problem has been identified, but immediate rectification is not required (such as resource coordination, waiting for approval, etc.)
- **Operation Steps**:
  - Select **"Yes"** in the dialog box
  - Select **"Wait for Processing"** from the dropdown menu
  - Fill in supplementary notes (such as "Wait until next week to sign uniformly")

![Wait for Processing](/public/doc-tbd-en.png)

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

![Close with Additional Information Dialog](/public/doc-add-en.png)

#### Processing Method 3: Add actions
- **Applicable Scenario**: Need to specify responsible person, corrective measures and completion deadline (such as re-signing, data correction, process training, etc.)
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

![Add Action Item Dialog](/public/doc-action-en.png)

> 📌 **Notes**:
> - "Attachments" support multiple file uploads (JPG, PNG, PDF, DOCX, etc.), single file ≤20MB
> - All submitted content (including processing method, description, attachments) are permanently recorded, supporting audit tracing
> - Once submitted, processing method cannot be changed; if adjustment needed, please contact application owner to initiate modification process

---

### Example Scenarios

| Actual Scenario | Recommended Processing Method | Description |
|----------|----------------|------|
| AI misjudges handwritten signature as "missing signature", actually signed | Close with Additional Information | Upload explanation, close quickly |
| Inspection form missing equipment number, needs supplementation | Add Action Item | Create action item task, assign operator |
| Accident report pending legal review before archiving | Wait for Processing | Explain review process, defer processing |

> 🔍 **General Notes**:  
> The above three processing methods apply to **Image, Document, APQP** all alert types, ensuring flexible, compliant, and traceable problem response paths.

## 3. Operation Path Reference Table

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

**Q: How to request application center permissions?**  
A: Contact system administrator, provide role proof.
> 🔍 **More Questions**: See the [FAQ document](/en/faq.md)

