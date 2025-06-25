# 🔖 Version Management Guide

This project uses **automated version management** based on
[Conventional Commits](https://www.conventionalcommits.org/) and
[Semantic Versioning](https://semver.org/).

## 🎯 How It Works

### Automatic Version Bumping

When you push to the `main` branch, our GitHub Actions workflow automatically:

1. **Analyzes commits** since the last release
2. **Determines version bump** type based on commit messages
3. **Updates package.json** version
4. **Generates CHANGELOG.md** with all changes
5. **Creates a git tag** for the new version
6. **Creates a GitHub release** with release notes

### Version Bump Rules

| Commit Type                                                | Version Bump              | Example          |
| ---------------------------------------------------------- | ------------------------- | ---------------- |
| `feat:`                                                    | **Minor** (0.1.0 → 0.2.0) | New features     |
| `fix:`                                                     | **Patch** (0.1.0 → 0.1.1) | Bug fixes        |
| `BREAKING CHANGE:`                                         | **Major** (0.1.0 → 1.0.0) | Breaking changes |
| `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:` | **Patch** (0.1.0 → 0.1.1) | Other changes    |

## 📝 Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types

| Type       | Description                                                      | Emoji |
| ---------- | ---------------------------------------------------------------- | ----- |
| `feat`     | ✨ A new feature                                                 | ✨    |
| `fix`      | 🐛 A bug fix                                                     | 🐛    |
| `docs`     | 📚 Documentation only changes                                    | 📚    |
| `style`    | 💄 Changes that do not affect the meaning of the code            | 💄    |
| `refactor` | ♻️ A code change that neither fixes a bug nor adds a feature     | ♻️    |
| `perf`     | ⚡ A code change that improves performance                       | ⚡    |
| `test`     | ✅ Adding missing tests or correcting existing tests             | ✅    |
| `chore`    | 🔧 Other changes that don't modify src or test files             | 🔧    |
| `ci`       | 🔄 Changes to our CI configuration files and scripts             | 🔄    |
| `build`    | 🏗️ Changes that affect the build system or external dependencies | 🏗️    |
| `revert`   | ⏪ Reverts a previous commit                                     | ⏪    |

### Examples

```bash
# Feature (minor version bump)
feat: add dark mode toggle component
feat(header): implement responsive navigation menu

# Bug fix (patch version bump)
fix: resolve navigation menu overflow issue
fix(button): correct hover state styling

# Documentation (patch version bump)
docs: update installation instructions
docs(readme): add contributing guidelines

# Breaking change (major version bump)
feat!: redesign API interface

# Or with footer
feat: redesign API interface

BREAKING CHANGE: The API interface has been completely redesigned.
```

## 🚀 Manual Release Commands

You can also trigger releases manually using npm scripts:

```bash
# Automatic version bump based on commits
npm run release

# Specific version bumps
npm run release:patch    # 0.1.0 → 0.1.1
npm run release:minor    # 0.1.0 → 0.2.0
npm run release:major    # 0.1.0 → 1.0.0

# Prerelease versions
npm run release:prerelease    # 0.1.0 → 0.1.1-0

# First release (for new projects)
npm run release:first
```

## 🔄 Workflow Process

### For Feature Development

1. **Create feature branch** from `main`:

   ```bash
   git checkout -b feature/new-component
   ```

2. **Make commits** using conventional format:

   ```bash
   git commit -m "feat: add new button component"
   git commit -m "docs: update button component documentation"
   ```

3. **Push and create PR**:

   ```bash
   git push origin feature/new-component
   # Create PR to main branch
   ```

4. **Merge PR** - This triggers automatic version management!

### GitHub Actions Triggers

#### Automatic (on push to main):

- ✅ Validates all code (TypeScript, ESLint, Prettier)
- ✅ Runs security audit
- ✅ Analyzes commit messages
- ✅ Determines version bump type
- ✅ Creates new release

#### Manual (workflow_dispatch):

You can manually trigger releases from GitHub Actions tab with specific version types.

## 📊 Release Artifacts

Each release automatically creates:

- 📋 **Updated package.json** with new version
- 📝 **CHANGELOG.md** with categorized changes
- 🏷️ **Git tag** (e.g., `v1.2.3`)
- 🚀 **GitHub Release** with release notes
- 📦 **Build artifacts** (optional)

## 🛡️ Protection Rules

### Pre-commit Hooks

- ✅ Code formatting (Prettier)
- ✅ Linting (ESLint)
- ✅ Type checking (TypeScript)
- ✅ Commit message validation

### GitHub Branch Protection

Recommended settings for `main` branch:

- ✅ Require pull request reviews
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Require linear history

## 🔧 Configuration Files

| File                                       | Purpose                        |
| ------------------------------------------ | ------------------------------ |
| `.versionrc.json`                          | Standard-version configuration |
| `.commitlintrc.json`                       | Commit message linting rules   |
| `.github/workflows/version-management.yml` | Automated versioning workflow  |
| `.github/workflows/ci.yml`                 | CI/CD validation pipeline      |

## 📈 Version History

All version history is tracked in:

- 📝 [CHANGELOG.md](./CHANGELOG.md) - Detailed change log
- 🏷️ [GitHub Releases](https://github.com/Walid-Azur/nextjs-boiler-app/releases) - Release notes
- 📊 [GitHub Tags](https://github.com/Walid-Azur/nextjs-boiler-app/tags) - Version tags

## 🆘 Troubleshooting

### Common Issues

**❌ Commit message validation failed**

```
Error: Commit message does not follow conventional format
```

**✅ Solution:** Use proper commit format: `type: description`

**❌ Version bump didn't trigger**

```
No new version was created
```

**✅ Solution:** Ensure commits follow conventional format and are pushed to `main`

**❌ Build failed during release**

```
Validation failed in GitHub Actions
```

**✅ Solution:** Fix validation errors (TypeScript, ESLint, tests) before merging

### Manual Recovery

If automatic versioning fails, you can manually create a release:

```bash
# Fix any issues first
npm run validate

# Create release manually
npm run release

# Push tags
git push --follow-tags origin main
```

## 🎯 Best Practices

1. **Use descriptive commit messages** that clearly explain what changed
2. **Group related changes** in single commits when possible
3. **Test thoroughly** before merging to main
4. **Review PRs carefully** as they will trigger releases
5. **Follow semantic versioning** principles
6. **Keep CHANGELOG.md** up to date (automated)
7. **Use feature branches** for all development

## 📚 Additional Resources

- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [Semantic Versioning Specification](https://semver.org/)
- [Standard Version Documentation](https://github.com/conventional-changelog/standard-version)
- [Commitlint Documentation](https://commitlint.js.org/)

---

**Happy versioning! 🚀**
