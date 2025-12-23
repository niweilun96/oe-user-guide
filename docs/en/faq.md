# Frequently Asked Questions (FAQ)

## Alert Visibility and Assignment

### 1.Why can't I see a certain alert on my homepage?

The alert has not been assigned to you. Please confirm whether the associated work order or project falls within your responsibility scope.

### 2.Can a single alert be assigned to multiple people for handling?

No. Each alert is assigned to one primary responsible person to ensure clear accountability. For collaboration, you may @ relevant colleagues in the action item description or upload communication records as attachments.

### 3.Can an Application Owner review alerts on behalf of the recipient?

Not recommended. The system follows the principle of “who receives, who reviews” to maintain clear ownership.

## Processing Workflow and Status

### 1.What if I selected the wrong processing method for an alert—can it be changed?

Once submitted, the processing method cannot be modified. If an adjustment is needed, please contact the Application Owner to initiate a correction process.

### 2.What are the alert statuses, and what do they mean?

Main statuses include:  
- **Suspected Issue**: AI has detected a risk; pending recipient confirmation  
- **Issue**: Issue is valid and awaiting resolution  
- **Closed**: Issue is invalid or already resolved (via “Close with Additional Information”)

### 3.What is the relationship between alerts and action items?

When an alert is confirmed as a valid issue requiring corrective action, you can create a dedicated task by selecting “Add Action Item,” assign a responsible person, and set a completion deadline. Action items are tracked independently to ensure closed-loop resolution.

### 4.How should I handle cases where AI misjudges a normal image/document as abnormal?

Select the “Close with Additional Information” option, explain the actual situation in the confirmation description, and optionally upload supporting evidence (e.g., original files or communication records) to help improve the model.

### 5.Will the system automatically close overdue alerts?

No. All alerts require manual review and confirmation. We recommend regularly checking 【Pending Confirmation Alerts】 to avoid missing any items.

### 6.What happens if an action item is not completed by its due date?

The system will continue to remind the responsible person on their homepage and may trigger escalation mechanisms (e.g., notifying supervisors or Compliance Committee members).

### 7.Can I edit the confirmation description or attachments after submission?

No direct edits are allowed. If corrections are necessary, please contact the Application Owner.

## Permissions and Data Management

### 1.How do I request access to the 【Alert Application Center】?

Please contact your system administrator and provide role verification (e.g., regional assignment or job responsibilities).

### 2.Is bulk export of alerts or action items supported?

Only Application Owners can export data in Excel or CSV format via 【Alert Application Center】 → corresponding sub-application. Alert recipients do not have this permission.

### 3.What file types are supported for attachments, and are there size limits?

Attachments support multiple file uploads (JPG, PNG, PDF, DOCX, etc.), with a maximum size of 20MB per file. All submitted content—including processing method, descriptions, and attachments—is permanently recorded for audit traceability.

## AI Model and Detection Logic

### 1.What is the difference between “AI-CTS” and “AI-CTQ” in image detection?

- **CTQ** (Critical to Quality): Focuses on product quality critical points  
- **CTS** (Critical to Safety): Focuses on personnel/environment safety critical points  

### 2.Why aren’t some work steps triggering AI detection?

AI detection only applies to work steps configured with critical control points (CTQ/CTS). If a step is not covered, please contact your business AI project owner to evaluate inclusion in the monitoring scope.

### 3.How often is the AI model updated, and how can I report misjudgments?

Models are iteratively optimized on a quarterly basis. For frequent misjudgments, use “Close with Additional Information” to submit real samples and explanations—the system will automatically collect them for model training.

### 4.Will uploaded images/documents be used by AI for other purposes?

No. All data is used solely for risk identification and compliance closure of the current work order, in strict compliance with company data privacy and information security policies. It will not be used for external training or commercial purposes.

### 5.If a single work order contains multiple anomalies, will multiple alerts be generated?

Yes. AI splits anomalies by type and location into separate alert items to enable granular confirmation and handling, reducing the risk of oversight.

## System Features and Limitations

### 1.Does the system support a multilingual interface?

The interface language automatically matches your browser or system settings (Chinese/English). Alert content (e.g., step descriptions, filenames) remains in its original language to ensure accuracy.