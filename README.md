pre-commit-sql-formatter
===================

For pre-commit: see https://github.com/pre-commit/pre-commit

For sql-formatter: see https://github.com/sql-formatter-org/sql-formatter/


### Using pre-commit-sql-formatter with pre-commit

Add this to your `.pre-commit-config.yaml`:

```yaml
-   repo: https://github.com/slyapustin/pre-commit-sql-formatter
    rev: 0.0.3  # Use the sha / tag you want to point at
    hooks:
    -   id: sql-formatter
        args: [--language=snowflake]
```
