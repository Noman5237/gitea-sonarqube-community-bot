export const SONARQUBE_METRICS = {
    "new_technical_debt": {
        "id": "AYr1wbeah_HKxR-hEVJW",
        "key": "new_technical_debt",
        "type": "WORK_DUR",
        "name": "Added Technical Debt",
        "description": "Added technical debt",
        "domain": "Maintainability",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "analysis_from_sonarqube_9_4": {
        "id": "AYr1wbedh_HKxR-hEVJ1",
        "key": "analysis_from_sonarqube_9_4",
        "type": "BOOL",
        "name": "Analysis From SonarQube 9.4",
        "description": "Indicates whether the analysis has been run after the upgrade to SonarQube 9.4. It affects how the issues will be detected for branches that use reference branch as the strategy for detecting new code.",
        "domain": "Issues",
        "direction": 0,
        "qualitative": false,
        "hidden": true
    },
    "blocker_violations": {
        "id": "AYr1wbeZh_HKxR-hEVI9",
        "key": "blocker_violations",
        "type": "INT",
        "name": "Blocker Issues",
        "description": "Blocker issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "bugs": {
        "id": "AYr1wbeah_HKxR-hEVJP",
        "key": "bugs",
        "type": "INT",
        "name": "Bugs",
        "description": "Bugs",
        "domain": "Reliability",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "classes": {
        "id": "AYr1wbeSh_HKxR-hEVIM",
        "key": "classes",
        "type": "INT",
        "name": "Classes",
        "description": "Classes",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "code_smells": {
        "id": "AYr1wbeah_HKxR-hEVJN",
        "key": "code_smells",
        "type": "INT",
        "name": "Code Smells",
        "description": "Code Smells",
        "domain": "Maintainability",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "cognitive_complexity": {
        "id": "AYr1wbeWh_HKxR-hEVIf",
        "key": "cognitive_complexity",
        "type": "INT",
        "name": "Cognitive Complexity",
        "description": "Cognitive complexity",
        "domain": "Complexity",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "comment_lines": {
        "id": "AYr1wbeTh_HKxR-hEVIT",
        "key": "comment_lines",
        "type": "INT",
        "name": "Comment Lines",
        "description": "Number of comment lines",
        "domain": "Size",
        "direction": 1,
        "qualitative": false,
        "hidden": false
    },
    "comment_lines_density": {
        "id": "AYr1wbeTh_HKxR-hEVIU",
        "key": "comment_lines_density",
        "type": "PERCENT",
        "name": "Comments (%)",
        "description": "Comments balanced by ncloc + comment lines",
        "domain": "Size",
        "direction": 1,
        "qualitative": true,
        "hidden": false,
        "decimalScale": 1
    },
    "comment_lines_data": {
        "id": "AYr1wbech_HKxR-hEVJv",
        "key": "comment_lines_data",
        "type": "DATA",
        "name": "comment_lines_data",
        "domain": "Size",
        "direction": 0,
        "qualitative": false,
        "hidden": true
    },
    "class_complexity": {
        "id": "AYr1wbeWh_HKxR-hEVIa",
        "key": "class_complexity",
        "type": "FLOAT",
        "name": "Complexity / Class",
        "description": "Complexity average by class",
        "domain": "Complexity",
        "direction": -1,
        "qualitative": true,
        "hidden": true,
        "decimalScale": 1
    },
    "file_complexity": {
        "id": "AYr1wbeWh_HKxR-hEVIY",
        "key": "file_complexity",
        "type": "FLOAT",
        "name": "Complexity / File",
        "description": "Complexity average by file",
        "domain": "Complexity",
        "direction": -1,
        "qualitative": true,
        "hidden": true,
        "decimalScale": 1
    },
    "function_complexity": {
        "id": "AYr1wbeWh_HKxR-hEVIc",
        "key": "function_complexity",
        "type": "FLOAT",
        "name": "Complexity / Function",
        "description": "Complexity average by function",
        "domain": "Complexity",
        "direction": -1,
        "qualitative": true,
        "hidden": true,
        "decimalScale": 1
    },
    "complexity_in_classes": {
        "id": "AYr1wbeWh_HKxR-hEVIZ",
        "key": "complexity_in_classes",
        "type": "INT",
        "name": "Complexity in Classes",
        "description": "Cyclomatic complexity in classes",
        "domain": "Complexity",
        "direction": -1,
        "qualitative": false,
        "hidden": true
    },
    "complexity_in_functions": {
        "id": "AYr1wbeWh_HKxR-hEVIb",
        "key": "complexity_in_functions",
        "type": "INT",
        "name": "Complexity in Functions",
        "description": "Cyclomatic complexity in functions",
        "domain": "Complexity",
        "direction": -1,
        "qualitative": false,
        "hidden": true
    },
    "branch_coverage": {
        "id": "AYr1wbeYh_HKxR-hEVIy",
        "key": "branch_coverage",
        "type": "PERCENT",
        "name": "Condition Coverage",
        "description": "Condition coverage",
        "domain": "Coverage",
        "direction": 1,
        "qualitative": true,
        "hidden": false,
        "decimalScale": 1
    },
    "new_branch_coverage": {
        "id": "AYr1wbeYh_HKxR-hEVIz",
        "key": "new_branch_coverage",
        "type": "PERCENT",
        "name": "Condition Coverage on New Code",
        "description": "Condition coverage of new/changed code",
        "domain": "Coverage",
        "direction": 1,
        "qualitative": true,
        "hidden": false,
        "decimalScale": 1
    },
    "conditions_to_cover": {
        "id": "AYr1wbeYh_HKxR-hEVIu",
        "key": "conditions_to_cover",
        "type": "INT",
        "name": "Conditions to Cover",
        "description": "Conditions to cover",
        "domain": "Coverage",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "new_conditions_to_cover": {
        "id": "AYr1wbeYh_HKxR-hEVIv",
        "key": "new_conditions_to_cover",
        "type": "INT",
        "name": "Conditions to Cover on New Code",
        "description": "Conditions to cover on new code",
        "domain": "Coverage",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "confirmed_issues": {
        "id": "AYr1wbeah_HKxR-hEVJM",
        "key": "confirmed_issues",
        "type": "INT",
        "name": "Confirmed Issues",
        "description": "Confirmed issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "coverage": {
        "id": "AYr1wbeXh_HKxR-hEVIm",
        "key": "coverage",
        "type": "PERCENT",
        "name": "Coverage",
        "description": "Coverage by tests",
        "domain": "Coverage",
        "direction": 1,
        "qualitative": true,
        "hidden": false,
        "decimalScale": 1
    },
    "new_coverage": {
        "id": "AYr1wbeXh_HKxR-hEVIn",
        "key": "new_coverage",
        "type": "PERCENT",
        "name": "Coverage on New Code",
        "description": "Coverage of new/changed code",
        "domain": "Coverage",
        "direction": 1,
        "qualitative": true,
        "hidden": false,
        "decimalScale": 1
    },
    "critical_violations": {
        "id": "AYr1wbeZh_HKxR-hEVI-",
        "key": "critical_violations",
        "type": "INT",
        "name": "Critical Issues",
        "description": "Critical issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "complexity": {
        "id": "AYr1wbeWh_HKxR-hEVIX",
        "key": "complexity",
        "type": "INT",
        "name": "Cyclomatic Complexity",
        "description": "Cyclomatic complexity",
        "domain": "Complexity",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "last_commit_date": {
        "id": "AYr1wbedh_HKxR-hEVJ0",
        "key": "last_commit_date",
        "type": "MILLISEC",
        "name": "Date of Last Commit",
        "domain": "SCM",
        "direction": 0,
        "qualitative": false,
        "hidden": true
    },
    "development_cost": {
        "id": "AYr1wbebh_HKxR-hEVJZ",
        "key": "development_cost",
        "type": "STRING",
        "name": "Development Cost",
        "description": "Development cost",
        "domain": "Maintainability",
        "direction": -1,
        "qualitative": true,
        "hidden": true
    },
    "new_development_cost": {
        "id": "AYr1wbebh_HKxR-hEVJa",
        "key": "new_development_cost",
        "type": "FLOAT",
        "name": "Development Cost on New Code",
        "description": "Development cost on new code",
        "domain": "Maintainability",
        "direction": -1,
        "qualitative": true,
        "hidden": true,
        "decimalScale": 1
    },
    "directories": {
        "id": "AYr1wbeSh_HKxR-hEVIO",
        "key": "directories",
        "type": "INT",
        "name": "Directories",
        "description": "Directories",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "duplicated_blocks": {
        "id": "AYr1wbeYh_HKxR-hEVI2",
        "key": "duplicated_blocks",
        "type": "INT",
        "name": "Duplicated Blocks",
        "description": "Duplicated blocks",
        "domain": "Duplications",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_duplicated_blocks": {
        "id": "AYr1wbeYh_HKxR-hEVI3",
        "key": "new_duplicated_blocks",
        "type": "INT",
        "name": "Duplicated Blocks on New Code",
        "description": "Duplicated blocks on new code",
        "domain": "Duplications",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "duplicated_files": {
        "id": "AYr1wbeYh_HKxR-hEVI4",
        "key": "duplicated_files",
        "type": "INT",
        "name": "Duplicated Files",
        "description": "Duplicated files",
        "domain": "Duplications",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "duplicated_lines": {
        "id": "AYr1wbeYh_HKxR-hEVI0",
        "key": "duplicated_lines",
        "type": "INT",
        "name": "Duplicated Lines",
        "description": "Duplicated lines",
        "domain": "Duplications",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "duplicated_lines_density": {
        "id": "AYr1wbeYh_HKxR-hEVI5",
        "key": "duplicated_lines_density",
        "type": "PERCENT",
        "name": "Duplicated Lines (%)",
        "description": "Duplicated lines balanced by statements",
        "domain": "Duplications",
        "direction": -1,
        "qualitative": true,
        "hidden": false,
        "decimalScale": 1
    },
    "new_duplicated_lines_density": {
        "id": "AYr1wbeYh_HKxR-hEVI6",
        "key": "new_duplicated_lines_density",
        "type": "PERCENT",
        "name": "Duplicated Lines (%) on New Code",
        "description": "Duplicated lines (%) on new code balanced by statements",
        "domain": "Duplications",
        "direction": -1,
        "qualitative": true,
        "hidden": false,
        "decimalScale": 1
    },
    "new_duplicated_lines": {
        "id": "AYr1wbeYh_HKxR-hEVI1",
        "key": "new_duplicated_lines",
        "type": "INT",
        "name": "Duplicated Lines on New Code",
        "description": "Duplicated Lines on New Code",
        "domain": "Duplications",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "duplications_data": {
        "id": "AYr1wbeZh_HKxR-hEVI7",
        "key": "duplications_data",
        "type": "DATA",
        "name": "Duplication Details",
        "description": "Duplications details",
        "domain": "Duplications",
        "direction": 0,
        "qualitative": false,
        "hidden": false
    },
    "effort_to_reach_maintainability_rating_a": {
        "id": "AYr1wbebh_HKxR-hEVJd",
        "key": "effort_to_reach_maintainability_rating_a",
        "type": "WORK_DUR",
        "name": "Effort to Reach Maintainability Rating A",
        "description": "Effort to reach maintainability rating A",
        "domain": "Maintainability",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "executable_lines_data": {
        "id": "AYr1wbech_HKxR-hEVJw",
        "key": "executable_lines_data",
        "type": "DATA",
        "name": "executable_lines_data",
        "domain": "Coverage",
        "direction": 0,
        "qualitative": false,
        "hidden": true
    },
    "false_positive_issues": {
        "id": "AYr1wbeZh_HKxR-hEVJI",
        "key": "false_positive_issues",
        "type": "INT",
        "name": "False Positive Issues",
        "description": "False positive issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "file_complexity_distribution": {
        "id": "AYr1wbeWh_HKxR-hEVIe",
        "key": "file_complexity_distribution",
        "type": "DISTRIB",
        "name": "File Distribution / Complexity",
        "description": "Files distribution /complexity",
        "domain": "Complexity",
        "direction": 0,
        "qualitative": true,
        "hidden": true
    },
    "files": {
        "id": "AYr1wbeSh_HKxR-hEVIN",
        "key": "files",
        "type": "INT",
        "name": "Files",
        "description": "Number of files",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "function_complexity_distribution": {
        "id": "AYr1wbeWh_HKxR-hEVId",
        "key": "function_complexity_distribution",
        "type": "DISTRIB",
        "name": "Function Distribution / Complexity",
        "description": "Functions distribution /complexity",
        "domain": "Complexity",
        "direction": 0,
        "qualitative": true,
        "hidden": true
    },
    "functions": {
        "id": "AYr1wbeSh_HKxR-hEVIP",
        "key": "functions",
        "type": "INT",
        "name": "Functions",
        "description": "Functions",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "generated_lines": {
        "id": "AYr1wbePh_HKxR-hEVIH",
        "key": "generated_lines",
        "type": "INT",
        "name": "Generated Lines",
        "description": "Number of generated lines",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "generated_ncloc": {
        "id": "AYr1wbeSh_HKxR-hEVIL",
        "key": "generated_ncloc",
        "type": "INT",
        "name": "Generated Lines of Code",
        "description": "Generated non Commenting Lines of Code",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "info_violations": {
        "id": "AYr1wbeZh_HKxR-hEVJB",
        "key": "info_violations",
        "type": "INT",
        "name": "Info Issues",
        "description": "Info issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "violations": {
        "id": "AYr1wbeZh_HKxR-hEVI8",
        "key": "violations",
        "type": "INT",
        "name": "Issues",
        "description": "Issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "line_coverage": {
        "id": "AYr1wbeXh_HKxR-hEVIs",
        "key": "line_coverage",
        "type": "PERCENT",
        "name": "Line Coverage",
        "description": "Line coverage",
        "domain": "Coverage",
        "direction": 1,
        "qualitative": true,
        "hidden": false,
        "decimalScale": 1
    },
    "new_line_coverage": {
        "id": "AYr1wbeXh_HKxR-hEVIt",
        "key": "new_line_coverage",
        "type": "PERCENT",
        "name": "Line Coverage on New Code",
        "description": "Line coverage of added/changed code",
        "domain": "Coverage",
        "direction": 1,
        "qualitative": true,
        "hidden": false,
        "decimalScale": 1
    },
    "lines": {
        "id": "AYr1wbeOh_HKxR-hEVIG",
        "key": "lines",
        "type": "INT",
        "name": "Lines",
        "description": "Lines",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "ncloc": {
        "id": "AYr1wbeRh_HKxR-hEVII",
        "key": "ncloc",
        "type": "INT",
        "name": "Lines of Code",
        "description": "Non commenting lines of code",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "ncloc_language_distribution": {
        "id": "AYr1wbeSh_HKxR-hEVIK",
        "key": "ncloc_language_distribution",
        "type": "DATA",
        "name": "Lines of Code Per Language",
        "description": "Non Commenting Lines of Code Distributed By Language",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "lines_to_cover": {
        "id": "AYr1wbeXh_HKxR-hEVIo",
        "key": "lines_to_cover",
        "type": "INT",
        "name": "Lines to Cover",
        "description": "Lines to cover",
        "domain": "Coverage",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "new_lines_to_cover": {
        "id": "AYr1wbeXh_HKxR-hEVIp",
        "key": "new_lines_to_cover",
        "type": "INT",
        "name": "Lines to Cover on New Code",
        "description": "Lines to cover on new code",
        "domain": "Coverage",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "sqale_rating": {
        "id": "AYr1wbebh_HKxR-hEVJX",
        "key": "sqale_rating",
        "type": "RATING",
        "name": "Maintainability Rating",
        "description": "A-to-E rating based on the technical debt ratio",
        "domain": "Maintainability",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_maintainability_rating": {
        "id": "AYr1wbebh_HKxR-hEVJY",
        "key": "new_maintainability_rating",
        "type": "RATING",
        "name": "Maintainability Rating on New Code",
        "description": "Maintainability rating on new code",
        "domain": "Maintainability",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "major_violations": {
        "id": "AYr1wbeZh_HKxR-hEVI_",
        "key": "major_violations",
        "type": "INT",
        "name": "Major Issues",
        "description": "Major issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "minor_violations": {
        "id": "AYr1wbeZh_HKxR-hEVJA",
        "key": "minor_violations",
        "type": "INT",
        "name": "Minor Issues",
        "description": "Minor issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "ncloc_data": {
        "id": "AYr1wbech_HKxR-hEVJu",
        "key": "ncloc_data",
        "type": "DATA",
        "name": "ncloc_data",
        "domain": "Size",
        "direction": 0,
        "qualitative": false,
        "hidden": true
    },
    "new_blocker_violations": {
        "id": "AYr1wbeZh_HKxR-hEVJD",
        "key": "new_blocker_violations",
        "type": "INT",
        "name": "New Blocker Issues",
        "description": "New Blocker issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_bugs": {
        "id": "AYr1wbeah_HKxR-hEVJQ",
        "key": "new_bugs",
        "type": "INT",
        "name": "New Bugs",
        "description": "New Bugs",
        "domain": "Reliability",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_code_smells": {
        "id": "AYr1wbeah_HKxR-hEVJO",
        "key": "new_code_smells",
        "type": "INT",
        "name": "New Code Smells",
        "description": "New Code Smells",
        "domain": "Maintainability",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_critical_violations": {
        "id": "AYr1wbeZh_HKxR-hEVJE",
        "key": "new_critical_violations",
        "type": "INT",
        "name": "New Critical Issues",
        "description": "New Critical issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_info_violations": {
        "id": "AYr1wbeZh_HKxR-hEVJH",
        "key": "new_info_violations",
        "type": "INT",
        "name": "New Info Issues",
        "description": "New Info issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_violations": {
        "id": "AYr1wbeZh_HKxR-hEVJC",
        "key": "new_violations",
        "type": "INT",
        "name": "New Issues",
        "description": "New issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_lines": {
        "id": "AYr1wbeRh_HKxR-hEVIJ",
        "key": "new_lines",
        "type": "INT",
        "name": "New Lines",
        "description": "New lines",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "new_major_violations": {
        "id": "AYr1wbeZh_HKxR-hEVJF",
        "key": "new_major_violations",
        "type": "INT",
        "name": "New Major Issues",
        "description": "New Major issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_minor_violations": {
        "id": "AYr1wbeZh_HKxR-hEVJG",
        "key": "new_minor_violations",
        "type": "INT",
        "name": "New Minor Issues",
        "description": "New Minor issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_security_hotspots": {
        "id": "AYr1wbeah_HKxR-hEVJU",
        "key": "new_security_hotspots",
        "type": "INT",
        "name": "New Security Hotspots",
        "description": "New Security Hotspots",
        "domain": "SecurityReview",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_vulnerabilities": {
        "id": "AYr1wbeah_HKxR-hEVJS",
        "key": "new_vulnerabilities",
        "type": "INT",
        "name": "New Vulnerabilities",
        "description": "New Vulnerabilities",
        "domain": "Security",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "unanalyzed_c": {
        "id": "AYr1wbedh_HKxR-hEVJ2",
        "key": "unanalyzed_c",
        "type": "INT",
        "name": "Number of unanalyzed c files",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": true
    },
    "unanalyzed_cpp": {
        "id": "AYr1wbedh_HKxR-hEVJ3",
        "key": "unanalyzed_cpp",
        "type": "INT",
        "name": "Number of unanalyzed c++ files",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": true
    },
    "open_issues": {
        "id": "AYr1wbeah_HKxR-hEVJK",
        "key": "open_issues",
        "type": "INT",
        "name": "Open Issues",
        "description": "Open issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "quality_profiles": {
        "id": "AYr1wbedh_HKxR-hEVJz",
        "key": "quality_profiles",
        "type": "DATA",
        "name": "Profiles",
        "description": "Details of quality profiles used during analysis",
        "domain": "General",
        "direction": 0,
        "qualitative": false,
        "hidden": true
    },
    "projects": {
        "id": "AYr1wbeSh_HKxR-hEVIS",
        "key": "projects",
        "type": "INT",
        "name": "Project branches",
        "description": "Number of project branches",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "public_api": {
        "id": "AYr1wbeSh_HKxR-hEVIR",
        "key": "public_api",
        "type": "INT",
        "name": "Public API",
        "description": "Public API",
        "domain": "Documentation",
        "direction": -1,
        "qualitative": false,
        "hidden": true
    },
    "public_documented_api_density": {
        "id": "AYr1wbeTh_HKxR-hEVIV",
        "key": "public_documented_api_density",
        "type": "PERCENT",
        "name": "Public Documented API (%)",
        "description": "Public documented classes and functions balanced by ncloc",
        "domain": "Documentation",
        "direction": 1,
        "qualitative": true,
        "hidden": true,
        "decimalScale": 1
    },
    "public_undocumented_api": {
        "id": "AYr1wbeVh_HKxR-hEVIW",
        "key": "public_undocumented_api",
        "type": "INT",
        "name": "Public Undocumented API",
        "description": "Public undocumented classes, functions and variables",
        "domain": "Documentation",
        "direction": -1,
        "qualitative": true,
        "hidden": true
    },
    "quality_gate_details": {
        "id": "AYr1wbedh_HKxR-hEVJy",
        "key": "quality_gate_details",
        "type": "DATA",
        "name": "Quality Gate Details",
        "description": "The project detailed status with regard to its quality gate",
        "domain": "General",
        "direction": 0,
        "qualitative": false,
        "hidden": false
    },
    "alert_status": {
        "id": "AYr1wbech_HKxR-hEVJx",
        "key": "alert_status",
        "type": "LEVEL",
        "name": "Quality Gate Status",
        "description": "The project status with regard to its quality gate.",
        "domain": "Releasability",
        "direction": 1,
        "qualitative": true,
        "hidden": false
    },
    "reliability_rating": {
        "id": "AYr1wbebh_HKxR-hEVJg",
        "key": "reliability_rating",
        "type": "RATING",
        "name": "Reliability Rating",
        "description": "Reliability rating",
        "domain": "Reliability",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_reliability_rating": {
        "id": "AYr1wbebh_HKxR-hEVJh",
        "key": "new_reliability_rating",
        "type": "RATING",
        "name": "Reliability Rating on New Code",
        "description": "Reliability rating on new code",
        "domain": "Reliability",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "reliability_remediation_effort": {
        "id": "AYr1wbebh_HKxR-hEVJe",
        "key": "reliability_remediation_effort",
        "type": "WORK_DUR",
        "name": "Reliability Remediation Effort",
        "description": "Reliability Remediation Effort",
        "domain": "Reliability",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_reliability_remediation_effort": {
        "id": "AYr1wbebh_HKxR-hEVJf",
        "key": "new_reliability_remediation_effort",
        "type": "WORK_DUR",
        "name": "Reliability Remediation Effort on New Code",
        "description": "Reliability remediation effort on new code",
        "domain": "Reliability",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "reopened_issues": {
        "id": "AYr1wbeah_HKxR-hEVJL",
        "key": "reopened_issues",
        "type": "INT",
        "name": "Reopened Issues",
        "description": "Reopened issues",
        "domain": "Issues",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "security_hotspots": {
        "id": "AYr1wbeah_HKxR-hEVJT",
        "key": "security_hotspots",
        "type": "INT",
        "name": "Security Hotspots",
        "description": "Security Hotspots",
        "domain": "SecurityReview",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    },
    "security_hotspots_reviewed": {
        "id": "AYr1wbech_HKxR-hEVJo",
        "key": "security_hotspots_reviewed",
        "type": "PERCENT",
        "name": "Security Hotspots Reviewed",
        "description": "Percentage of Security Hotspots Reviewed",
        "domain": "SecurityReview",
        "direction": 1,
        "qualitative": true,
        "hidden": false,
        "decimalScale": 1
    },
    "new_security_hotspots_reviewed": {
        "id": "AYr1wbech_HKxR-hEVJp",
        "key": "new_security_hotspots_reviewed",
        "type": "PERCENT",
        "name": "Security Hotspots Reviewed on New Code",
        "description": "Percentage of Security Hotspots Reviewed on New Code",
        "domain": "SecurityReview",
        "direction": 1,
        "qualitative": true,
        "hidden": false,
        "decimalScale": 1
    },
    "security_rating": {
        "id": "AYr1wbech_HKxR-hEVJk",
        "key": "security_rating",
        "type": "RATING",
        "name": "Security Rating",
        "description": "Security rating",
        "domain": "Security",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_security_rating": {
        "id": "AYr1wbech_HKxR-hEVJl",
        "key": "new_security_rating",
        "type": "RATING",
        "name": "Security Rating on New Code",
        "description": "Security rating on new code",
        "domain": "Security",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "security_remediation_effort": {
        "id": "AYr1wbebh_HKxR-hEVJi",
        "key": "security_remediation_effort",
        "type": "WORK_DUR",
        "name": "Security Remediation Effort",
        "description": "Security remediation effort",
        "domain": "Security",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_security_remediation_effort": {
        "id": "AYr1wbebh_HKxR-hEVJj",
        "key": "new_security_remediation_effort",
        "type": "WORK_DUR",
        "name": "Security Remediation Effort on New Code",
        "description": "Security remediation effort on new code",
        "domain": "Security",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "security_review_rating": {
        "id": "AYr1wbech_HKxR-hEVJm",
        "key": "security_review_rating",
        "type": "RATING",
        "name": "Security Review Rating",
        "description": "Security Review Rating",
        "domain": "SecurityReview",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "new_security_review_rating": {
        "id": "AYr1wbech_HKxR-hEVJn",
        "key": "new_security_review_rating",
        "type": "RATING",
        "name": "Security Review Rating on New Code",
        "description": "Security Review Rating on New Code",
        "domain": "SecurityReview",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "security_hotspots_reviewed_status": {
        "id": "AYr1wbech_HKxR-hEVJq",
        "key": "security_hotspots_reviewed_status",
        "type": "INT",
        "name": "Security Review Reviewed Status",
        "description": "Security Review Reviewed Status",
        "domain": "SecurityReview",
        "direction": -1,
        "qualitative": false,
        "hidden": true
    },
    "new_security_hotspots_reviewed_status": {
        "id": "AYr1wbech_HKxR-hEVJs",
        "key": "new_security_hotspots_reviewed_status",
        "type": "INT",
        "name": "Security Review Reviewed Status on New Code",
        "description": "Security Review Reviewed Status on New Code",
        "domain": "SecurityReview",
        "direction": -1,
        "qualitative": false,
        "hidden": true
    },
    "security_hotspots_to_review_status": {
        "id": "AYr1wbech_HKxR-hEVJr",
        "key": "security_hotspots_to_review_status",
        "type": "INT",
        "name": "Security Review To Review Status",
        "description": "Security Review To Review Status",
        "domain": "SecurityReview",
        "direction": -1,
        "qualitative": false,
        "hidden": true
    },
    "new_security_hotspots_to_review_status": {
        "id": "AYr1wbech_HKxR-hEVJt",
        "key": "new_security_hotspots_to_review_status",
        "type": "INT",
        "name": "Security Review To Review Status on New Code",
        "description": "Security Review To Review Status on New Code",
        "domain": "SecurityReview",
        "direction": -1,
        "qualitative": false,
        "hidden": true
    },
    "skipped_tests": {
        "id": "AYr1wbeXh_HKxR-hEVIj",
        "key": "skipped_tests",
        "type": "INT",
        "name": "Skipped Unit Tests",
        "description": "Number of skipped unit tests",
        "domain": "Coverage",
        "direction": -1,
        "qualitative": true,
        "hidden": false
    },
    "statements": {
        "id": "AYr1wbeSh_HKxR-hEVIQ",
        "key": "statements",
        "type": "INT",
        "name": "Statements",
        "description": "Number of statements",
        "domain": "Size",
        "direction": -1,
        "qualitative": false,
        "hidden": false
    }
}