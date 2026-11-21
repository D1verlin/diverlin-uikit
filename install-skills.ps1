$ErrorActionPreference = "Stop"
$sourceDir = Join-Path $PSScriptRoot "skills"
$targetDir = Join-Path $HOME ".gemini\config\skills"

if (-not (Test-Path $targetDir)) {
  New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
}

Copy-Item -Path (Join-Path $sourceDir "*") -Destination $targetDir -Recurse -Force
Write-Host "Installed 4 Diverlin skills into $targetDir" -ForegroundColor Green
