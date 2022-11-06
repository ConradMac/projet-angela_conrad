<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220928193109 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE documents_services (documents_id INT NOT NULL, services_id INT NOT NULL, INDEX IDX_1AAB6FF65F0F2752 (documents_id), INDEX IDX_1AAB6FF6AEF5A6C1 (services_id), PRIMARY KEY(documents_id, services_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE documents_services ADD CONSTRAINT FK_1AAB6FF65F0F2752 FOREIGN KEY (documents_id) REFERENCES documents (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE documents_services ADD CONSTRAINT FK_1AAB6FF6AEF5A6C1 FOREIGN KEY (services_id) REFERENCES services (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE documents_services DROP FOREIGN KEY FK_1AAB6FF65F0F2752');
        $this->addSql('ALTER TABLE documents_services DROP FOREIGN KEY FK_1AAB6FF6AEF5A6C1');
        $this->addSql('DROP TABLE documents_services');
    }
}
