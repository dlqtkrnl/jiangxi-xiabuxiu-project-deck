param(
  [Parameter(Mandatory = $true)]
  [string]$RemoteUrl
)

$ErrorActionPreference = "Stop"

$repoPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoPath

git config --global --add safe.directory $repoPath

if (-not (Test-Path ".git")) {
  git init -b main
}

git add .

try {
  git diff --cached --quiet
  $hasChanges = $false
} catch {
  $hasChanges = $true
}

if ($hasChanges) {
  git commit -m "Update expert meeting presentation site"
}

$existingRemote = $null
try {
  $existingRemote = git remote get-url origin 2>$null
} catch {
  $existingRemote = $null
}

if (-not $existingRemote) {
  git remote add origin $RemoteUrl
} elseif ($existingRemote -ne $RemoteUrl) {
  git remote set-url origin $RemoteUrl
}

git push -u origin main
